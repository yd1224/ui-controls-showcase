// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Small button handlers in data grid
    const smallButtons = document.querySelectorAll('.btn-small');
    smallButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent row selection
            const action = this.textContent.toLowerCase();
            const row = this.closest('tr');
            const name = row.cells[1].textContent;
            
            if (action === 'edit') {
                alert(`Edit ${name}`);
            } else if (action === 'delete') {
                if (confirm(`Are you sure you want to delete ${name}?`)) {
                    row.style.opacity = '0.5';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
            }
        });
    });


    // Form submission example
    const form = document.querySelector('.form-group');
    if (form) {
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit Form';
        submitButton.className = 'btn btn-primary';
        submitButton.style.marginTop = '15px';
        
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.style.borderColor = '#dc3545';
                    isValid = false;
                } else {
                    input.style.borderColor = '#e1e8ed';
                }
            });
            
            if (isValid) {
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all required fields.');
            }
        });
        
        form.appendChild(submitButton);
    }
});
