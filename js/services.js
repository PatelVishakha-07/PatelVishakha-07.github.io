const services = [
    {
        icon: "fa-brands fa-android",
        title: "Application Developer",
        description: `I develop user-friendly mobile and desktop applications tailored to modern needs.
        My focus is on clean UI design, smooth performance, and feature-rich functionality.
        I ensure each application is optimized, secure, and scalable for future enhancements.`
    },
    {
        icon: "fa-solid fa-desktop",
        title: "Desktop Application Developer",
        description: `I design and build powerful desktop applications that simplify daily operations for businesses and individuals.
        Whether it is inventory management, billing systems, or clinic management software,
        I specialize in creating practical and efficient solutions with intuitive interfaces.`
    },
    {
        icon: "fas fa-code",
        title: "Web Developer",
        description: `I create responsive and visually appealing websites using modern web technologies.
        From portfolio sites to fully dynamic and interactive web applications,
        I ensure speed, strong UI/UX, and seamless user experience across all devices.`
    }
];

var sub_title = document.getElementById("sub-title");
sub_title.style.marginBottom = "50px";

const servicesList = document.getElementById("services-list");

services.forEach(service => {

    // Bootstrap Column
    const col = document.createElement("div");
    col.className = "col-12";

    // Service Card
    const div = document.createElement("div");
    div.className = "services-thumb";

    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.transition = "all 0.5s";

    // Horizontal Layout
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "20px";

    // Hover Effects
    div.addEventListener("mouseenter", () => {
        div.style.border = "2px solid var(--secondary-color)";
        div.style.boxShadow = "0 1rem 3rem rgba(0,0,0,.175)";
        div.style.transform = "translateY(-10px)";
    });

    div.addEventListener("mouseleave", () => {
        div.style.border = "2px solid transparent";
        div.style.boxShadow = "none";
        div.style.transform = "translateY(0)";
    });

    // Icon
    const icon = document.createElement("i");
    icon.className = service.icon;

    icon.style.fontSize = "20px";
    icon.style.color = "var(--secondary-color)";
    icon.style.flexShrink = "0";

    // Title
    const title = document.createElement("h5");
    title.textContent = service.title;
    title.style.marginBottom = "10px";

    title.style.fontSize = "1.15rem";
    title.style.color = "#fff";
    title.style.fontWeight = "600";
    title.style.marginBottom = "8px";

    // Description
    const desc = document.createElement("p");
    desc.textContent = service.description;
    desc.style.lineHeight = "1.6";
    desc.style.marginBottom = "0";
    desc.style.fontSize = ".95rem";
    desc.style.color = "#94a3b8";
    desc.style.lineHeight = "1.7";

    // Content Wrapper
    const content = document.createElement("div");

    content.appendChild(title);
    content.appendChild(desc);

    // Append Elements
    div.appendChild(icon);
    div.appendChild(content);

    col.appendChild(div);

    servicesList.appendChild(col);
});