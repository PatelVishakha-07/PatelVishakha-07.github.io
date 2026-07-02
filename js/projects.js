const projects = [
{
    title: "Face Recognition Attendance System",
    image: "images/attendance/login.png",
    images: [
        "images/attendance/login.png",
        "images/attendance/admin_dashboard.png",
        "images/attendance/admin_add_std.png",
        "images/attendance/promote_std.png",
        "images/attendance/faculty_dashboard.png",
        "images/attendance/code_atd.png",
        "images/attendance/std_dashboard.png",
        "images/attendance/atd_report.png"
    ],
    tech: "Python • OpenCV • MySQL",
    description: "Built a desktop attendance system that detects and identifies faces in real time using OpenCV. Marks attendance automatically and stores records in MySQL — eliminating manual entry. Taught me how computer vision pipelines work end to end, from camera capture to database writes.",
    highlight: "Computer Vision • Real-time Detection",
    github: "https://github.com/PatelVishakha-07/online_ams",
},
{
    title: "Clinic Management System",
    image: "images/clinic/login.png",
    images: [
        "images/clinic/login.png",
        "images/clinic/report.jpeg",
        "images/clinic/patient_list.jpeg",
        "images/clinic/add_medicine.jpeg",
        "images/clinic/certificate.jpeg",
        "images/clinic/certificate_output.jpeg"
    ],
    tech: "C# • PostgreSQL • .NET",
    description: "Designed and built a full desktop application for managing patient records, appointments, and prescriptions. Focused on building a clean, role-based UI that non-technical staff could use without training. Strengthened my skills in .NET desktop architecture and relational database design.",
    highlight: "Desktop App • Database Design",
    github: "https://github.com/PatelVishakha-07/Clinic_Management_System",
},
{
    title: "AI Interview Question Generator",
    image: "images/interview/login.png",
    images: [
        "images/interview/login.png",
        "images/interview/verify_code.png",
        "images/interview/profile.png",        
        "images/interview/generate.png",
        "images/interview/session_history.png"
    ],
    tech: "Django • Gemini API • MySQL",
    description: "Web app that uses the Gemini API to generate interview questions tailored to a specific job role or topic. Users can save their question history, revisit past sessions, and export questions — making it a practical prep tool. Integrated a third-party LLM API and built user session management from scratch.",
    highlight: "AI Integration • Django • REST",
    github: "https://github.com/PatelVishakha-07/InterviewPrepAI",
}
];


const workList = document.getElementById("work-list");

projects.forEach(project => {

workList.innerHTML += `
<div class="col-lg-4 col-md-6 mb-4">
    <div class="project-card h-100">

        <a href="${project.images[0]}"
           class="project-gallery-${project.title.replace(/\s+/g,'-')}">

            <img src="${project.image}"
                 class="project-image"
                 alt="${project.title}">
        </a>

        ${project.images.slice(1).map(img =>
            `<a href="${img}"
                class="project-gallery-${project.title.replace(/\s+/g,'-')}"
                style="display:none"></a>`
        ).join('')}

        <div class="project-content">

            <span class="project-tech">${project.tech}</span>

            <h4 class="project-title mt-3">${project.title}</h4>

            <p class="project-desc">${project.description}</p>

            <div class="project-highlight mb-4">
                <i class="bi bi-lightning-charge-fill me-1"></i>
                ${project.highlight}
            </div>

            <div class="d-flex gap-2">
                <a href="${project.github}"
                   class="btn btn-prime btn-sm"
                   target="_blank">
                   <i class="bi bi-github me-1"></i>GitHub
                </a>
            </div>

        </div>

    </div>
</div>
`;

});

projects.forEach(project => {

    const galleryClass =
        ".project-gallery-" +
        project.title.replace(/\s+/g, "-");

    $(galleryClass).magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });

});