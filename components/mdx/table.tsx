export default function Table() {
  const comparisonTable = [
    {
      featureAspect: "Syntax Simplicity",
      Dataclasses: "High",
      Pydantic: "High",
      TraditionalOOP: "Moderate to Low",
    },
    {
      featureAspect: "Boilerplate Code",
      Dataclasses: "Minimal",
      Pydantic: "Minimal",
      TraditionalOOP: "High",
    },
    {
      featureAspect: "Type Checking",
      Dataclasses: "Static (with mypy)",
      Pydantic: "Runtime",
      TraditionalOOP: "Static (with mypy)",
    },
    {
      featureAspect: "Data Validation",
      Dataclasses: "Basic",
      Pydantic: "Comprehensive",
      TraditionalOOP: "Customizable",
    },
    {
      featureAspect: "Performance",
      Dataclasses: "Very Good",
      Pydantic: "Good (with slight overhead)",
      TraditionalOOP: "Very Good",
    },
    {
      featureAspect: "Custom Behavior",
      Dataclasses: "Limited (without extensions)",
      Pydantic: "Limited (focused on validation)",
      TraditionalOOP: "Highly Customizable",
    },
    {
      featureAspect: "Serialization/Deserialization",
      Dataclasses: "Built-in support (limited)",
      Pydantic: "Extensive support",
      TraditionalOOP: "Manual or via third-party libs",
    },
    {
      featureAspect: "Integration with Frameworks",
      Dataclasses: "Good (manual integration)",
      Pydantic: "Excellent (with FastAPI, etc.)",
      TraditionalOOP: "Good (manual integration)",
    },
  ];

  return (
    <div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                  >
                    Feature/Aspect
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Dataclasses
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Pydantic
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Traditional OOP
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {comparisonTable.map((row) => (
                  <tr
                    key={row.featureAspect}
                    className="even:bg-slate-50 dark:even:bg-slate-900"
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-3">
                      {row.featureAspect}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {row.Dataclasses}
                    </td>{" "}
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {row.Pydantic}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {row.TraditionalOOP}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
