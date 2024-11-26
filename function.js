<script>
    document.querySelector(".scroll-down").addEventListener("click", () => {
        const nextSection = document.getElementById("next-section");
        nextSection.scrollIntoView({ behavior: "smooth" });
    });
</script>