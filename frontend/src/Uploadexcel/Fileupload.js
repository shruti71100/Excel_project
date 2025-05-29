import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './Fileupload.css';

function Fileupload() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);

    reader.onload = (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };

  return (
    <div className="container">
      <div className="file-upload">
        <h1>Upload Excel File</h1>
        <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
        <hr />
        {data.length > 0 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key, idx) => (
                    <th key={idx}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fileupload;
