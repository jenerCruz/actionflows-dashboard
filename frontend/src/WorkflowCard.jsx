import React from "react";

export default function WorkflowCard({ data }) {
  return (
    <div className="mt-6 p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {data.name || "Workflow"}
      </h2>

      {/* Triggers */}
      {data.on && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-600">Triggers</h3>
          <div className="bg-blue-50 p-3 rounded">
            {data.on.map((trigger, i) => (
              <div key={i} className="mb-2">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Tipo:</span> {trigger.trigger}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Filtro:</span> {trigger.filter}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Jobs */}
      {data.jobs && (
        <div>
          <h3 className="text-lg font-semibold text-green-600">Jobs</h3>
          <div className="bg-green-50 p-3 rounded">
            {data.jobs.map((job, i) => (
              <div key={i} className="mb-2">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Acción:</span> {job.run}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
