// leavewidget.js - self-contained widget (no external fetch, no CORS)
(function () {
  const ROOT_ID = 'leave-widget-root';

  const widgetHtml = `
<div style="max-width:700px;margin:auto;margin-top:20px;font-family:Arial, sans-serif;">
  <h2 style="text-align:center;color:#2b5797;margin-bottom:20px;">
      Test Table Loaded From MASTER (Snippet)
  </h2>
  <table style="width:100%;border-collapse:collapse;box-shadow:0 0 10px rgba(0,0,0,0.1);">
      <thead>
          <tr style="background:#2b5797;color:white;">
              <th style="padding:10px;border:1px solid #ddd;">Employee</th>
              <th style="padding:10px;border:1px solid #ddd;">Leave Type</th>
              <th style="padding:10px;border:1px solid #ddd;">Days</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td style="padding:10px;border:1px solid #ddd;">Aman Memon</td>
              <td style="padding:10px;border:1px solid #ddd;">Sick Leave</td>
              <td style="padding:10px;border:1px solid #ddd;">2</td>
          </tr>
          <tr style="background:#f9f9f9;">
              <td style="padding:10px;border:1px solid #ddd;">John Smith</td>
              <td style="padding:10px;border:1px solid #ddd;">Casual Leave</td>
              <td style="padding:10px;border:1px solid #ddd;">1</td>
          </tr>
          <tr>
              <td style="padding:10px;border:1px solid #ddd;">Sara Ali</td>
              <td style="padding:10px;border:1px solid #ddd;">Annual Leave</td>
              <td style="padding:10px;border:1px solid #ddd;">5</td>
          </tr>
      </tbody>
  </table>
</div>
  `;

  function inject() {
    const root = document.getElementById(ROOT_ID);
    if (!root) {
      // If not found, create and append at the end of body
      const newRoot = document.createElement('div');
      newRoot.id = ROOT_ID;
      document.body.appendChild(newRoot);
      document.getElementById(ROOT_ID).innerHTML = widgetHtml;
      return;
    }
    root.innerHTML = widgetHtml;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
