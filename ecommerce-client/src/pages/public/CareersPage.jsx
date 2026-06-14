import React, { useState } from 'react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = [
    { id: 1, title: 'Fashion Designer', location: 'New York, NY', type: 'Full-time', department: 'Design' },
    { id: 2, title: 'Marketing Manager', location: 'Remote', type: 'Full-time', department: 'Marketing' },
    { id: 3, title: 'Customer Service Representative', location: 'Austin, TX', type: 'Full-time', department: 'Support' },
    { id: 4, title: 'Warehouse Associate', location: 'Los Angeles, CA', type: 'Full-time', department: 'Operations' },
    { id: 5, title: 'Social Media Coordinator', location: 'Remote', type: 'Part-time', department: 'Marketing' },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4">Careers</h1>
        <p className="text-gray-500 text-center mb-12">Join our team and help shape the future of fashion</p>
        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="border rounded-xl p-6 hover:shadow-md transition-shadow flex justify-between items-center flex-wrap gap-4">
              <div><h3 className="text-xl font-semibold mb-1">{job.title}</h3><p className="text-gray-500 text-sm">{job.department} • {job.location} • {job.type}</p></div>
              <button onClick={() => setSelectedJob(job)} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Apply</button>
            </div>
          ))}
        </div>
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedJob(null)}>
            <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-light mb-4">Apply for {selectedJob.title}</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" required />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
                <textarea placeholder="Why are you a good fit?" rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea>
                <div className="flex gap-3"><button type="submit" className="flex-1 bg-black text-white py-2 rounded-lg">Submit</button><button type="button" onClick={() => setSelectedJob(null)} className="flex-1 border py-2 rounded-lg">Cancel</button></div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CareersPage;
