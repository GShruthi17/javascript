export default function json2html(data) {
    // Get unique headers from the data
    const headers = [...new Set(data.flatMap(obj => Object.keys(obj)))];
  
    // Start building the HTML table
    let html = `<table data-user="shruthikagudem@gmail.com">`;
    html += "<thead><tr>" + headers.map(header => `<th>${header}</th>`).join('') + "</tr></thead>";
    
    // Add each row of data to the table
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>" + headers.map(header => `<td>${row[header] || ''}</td>`).join('') + "</tr>";
    });
    html += "</tbody></table>";
  
    return html;
  }
  
  // Sample data to test
  const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
  ];
  
  // Example usage
  console.log(json2html(data));
  
