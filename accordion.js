((d) => {
  const faqs = d.querySelectorAll(".Faq_questions_accordion");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("show");
    })
  })
})(document)