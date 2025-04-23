const scrollToSectionByIdUtils = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
        const elTop = element?.getBoundingClientRect().top + window?.pageYOffset;
        const headerOffset = 80;
        window.scrollTo({ top: elTop - headerOffset, behavior: "smooth" });
        window?.history?.pushState(null, "", `#${id}`);
    }, 50)
};

export default scrollToSectionByIdUtils;