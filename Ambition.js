<script>
    // Wait for the document to fully load
    document.addEventListener("DOMContentLoaded", function() {
        // Select all point boxes
        const pointBoxes = document.querySelectorAll('.point-box');

        // Add the floating class to each point box
        pointBoxes.forEach(box => {
            box.classList.add('floating');
        });
    });
</script>
