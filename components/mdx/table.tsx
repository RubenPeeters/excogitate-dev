export default function Table() {
  return (
    <table className="table-auto">
      <tr>
        <th>Feature/Aspect</th>
        <th>Dataclasses</th>
        <th>Pydantic</th>
        <th>Traditional OOP</th>
      </tr>
      <tr>
        <td>Syntax Simplicity</td>
        <td>High</td>
        <td>High</td>
        <td>Moderate to Low</td>
      </tr>
      <tr>
        <td>Boilerplate Code</td>
        <td>Minimal</td>
        <td>Minimal</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Type Checking</td>
        <td>Static (with mypy)</td>
        <td>Runtime</td>
        <td>Static (with mypy)</td>
      </tr>
      <tr>
        <td>Data Validation</td>
        <td>Basic</td>
        <td>Comprehensive</td>
        <td>Customizable</td>
      </tr>
      <tr>
        <td>Performance</td>
        <td>Very Good</td>
        <td>Good (with slight overhead)</td>
        <td>Very Good</td>
      </tr>
      <tr>
        <td>Custom Behavior</td>
        <td>Limited (without extensions)</td>
        <td>Limited (focused on validation)</td>
        <td>Highly Customizable</td>
      </tr>
      <tr>
        <td>Serialization/Deserialization</td>
        <td>Built-in support (limited)</td>
        <td>Extensive support</td>
        <td>Manual or via third-party libs</td>
      </tr>
      <tr>
        <td>Integration with Frameworks</td>
        <td>Good (manual integration)</td>
        <td>Excellent (with FastAPI, etc.)</td>
        <td>Good (manual integration)</td>
      </tr>
    </table>
  );
}
