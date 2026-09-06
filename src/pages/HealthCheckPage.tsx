import React, { useEffect, useState } from 'react';
import { getSystemHealth } from '../services/healthService';
import { SystemHealth } from '../types/appStore';

export const HealthCheckPage: React.FC = () => {
  const [health, setHealth] = useState<SystemHealth | null>(null);

  useEffect(() => {
    getSystemHealth().then(setHealth);
  }, []);

  return (
    <div className="p-8 max-w-xl mx-auto my-12 bg-zinc-900 text-emerald-400 font-mono text-sm rounded-2xl border border-zinc-800 shadow-2xl space-y-4">
      <div className="text-zinc-500 font-bold border-b border-zinc-800 pb-2">
        // HTTP 200 OK — GET /api/health
      </div>
      {health ? (
        <pre className="whitespace-pre-wrap leading-relaxed">
          {JSON.stringify(health, null, 2)}
        </pre>
      ) : (
        <div>Checking system health status...</div>
      )}
    </div>
  );
};
