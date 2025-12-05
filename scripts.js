function scrollToSection(id) {
    const section = document.getElementById(id);

    if (!section) {
        console.error("Section not found:", id);
        return;
    }

    section.scrollIntoView({ behavior: "smooth" });
}

