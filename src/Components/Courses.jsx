import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  const [enrolled, SetEnrolled] = useState([]);
  const authToken = localStorage.getItem('token');
  const [processingCourses, setProcessingCourses] = useState(new Set());

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));

    if (userId) {
      fetch(`http://localhost:8080/api/learning/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          let arr = [];
          for (let i = 0; i < data.length; i++) arr.push(data[i].course_id);
          SetEnrolled(arr);
        })
        .catch((error) => console.error("Error fetching enrolled courses:", error));
    }
  }, []);

  async function loadRazorpayScript() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function enrollCourse(courseId) {
    if (processingCourses.has(courseId)) return;
    setProcessingCourses(prev => new Set(prev).add(courseId));

    if (!authToken) {
      toast.error('You need to login to continue', {
        position: 'top-right', autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
      });
      setTimeout(() => navigate('/login'), 2000);
      setProcessingCourses(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast.error("Razorpay SDK failed to load.");
      setProcessingCourses(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/api/courses/${courseId}/enroll`, { userId });
      const transactionId = response.data;

      const selectedCourse = courses.find(c => c.course_id === courseId);
      const options = {
        key: 'rzp_test_DcmPp3YuVHAaf7',
        amount: selectedCourse.price * 100,
        currency: 'INR',
        name: 'StuHub',
        description: 'Course Enrollment',
        order_id: transactionId,
        handler: async function (response) {
          const paymentId = response.razorpay_payment_id;
          try {
            const verifyResponse = await axios.post('http://localhost:8080/api/verify-payment', { paymentId });
            if (verifyResponse.data) {
              await axios.post('http://localhost:8080/api/learning', { userId, courseId });
              toast.success('Course Enrolled successfully', {
                position: 'top-right', autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
              });
              setTimeout(() => navigate(`/course/${courseId}`), 2000);
            } else {
              throw new Error('Payment not verified');
            }
          } catch (error) {
            console.error('Verification error:', error);
            toast.error('Payment verification failed. Please try again.', {
              position: 'top-right', autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
            });
          }
        },
        prefill: {
          name: 'INAAMUL HASAN', email: 'inaamulh66@gmail.com', contact: '8072741565', method: 'upi', vpa: 'inaamulh66@oksbi',
        },
        notes: { course_id: courseId },
        theme: { color: '#1A73E8' },
        handler_on_error: function (error) {
          if (error.code === 0) {
            toast.error('Payment app not found. Please install Google Pay or use another UPI app.', {
              position: 'top-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
            });
          } else {
            console.error('Razorpay error:', error);
            toast.error(`Payment failed: ${error.description}`, {
              position: 'top-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
            });
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Enrollment error:', error);
      toast.error('Error enrolling. Check console for details.', {
        position: 'top-right', autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false,
      });
    } finally {
      setProcessingCourses(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
    }
  }

  return (
    <div>
      <Navbar page={"courses"} />
      <div className="courses-container" style={{ marginTop: "20px" }}>
        {courses.map((course) => (
          <div key={course.course_id} className="course-card">
            <img src={course.p_link} alt={course.course_name} className="course-image" />
            <div className="course-details">
              <h3 className="course-heading">
                {course.courseName.length < 8 ? `${course.courseName} Tutorial` : course.courseName}
              </h3>
              <p className="course-description" style={{ color: "grey" }}>Price: Rs.{course.price}</p>
              <p className="course-description">Tutorial by {course.instructor}</p>
            </div>
            {enrolled.includes(course.course_id) ? (
              <button
                className="enroll-button"
                style={{ color: '#F4D03F', backgroundColor: 'darkblue', fontWeight: 'bold' }}
                onClick={() => navigate("/learnings")}
              >
                Enrolled
              </button>
            ) : (
              <button
                className="enroll-button"
                onClick={() => enrollCourse(course.course_id)}
                disabled={processingCourses.has(course.course_id)}
              >
                {processingCourses.has(course.course_id) ? "Processing..." : "Enroll"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
