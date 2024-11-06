// script.js

// Function to download the entire portfolio page as a PDF
function downloadPortfolio() {
    // Select the whole page content
    const element = document.body; 
    
    // Set options for the PDF generation
    const options = {
        margin: 0.5, // Set margin for PDF
        filename: 'Reia_Data_Analyst_Portfolio.pdf', // Name of the PDF file
        image: { type: 'jpeg', quality: 0.98 }, // Image settings for high quality
        html2canvas: { scale: 2 }, // Improve resolution of the PDF
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // PDF layout settings
    };

    // Use html2pdf to convert the page to PDF and automatically download it
    html2pdf().set(options).from(element).save();
}
