import React, { useMemo, useState } from "react";

// JobsPage.jsx
// Single-file React + Tailwind component that closely matches the provided layout.
// - Fully working filters (search, location, job title, on-site/remote, job type, salary range)
// - Sort, per-page, grid/list view toggle, pagination
// - Lots of sample jobs added

const JOBS = [
  { id: 1, company: "Rockstar Games New York", title: "Senior UI/UX Designer", location: "Manhattan, NY", posted: "2 days ago", tags: ["Full-time","Remote"], jobType: "Design & Creative", salaryMin: 83000, salaryMax: 110000, salaryLabel: "₹83,000 - ₹110,000 /year" },
  { id: 2, company: "Rockstar Games New York", title: "Social Media Marketing", location: "Manhattan, NY", posted: "2 days ago", tags: ["Freelancer","Remote"], jobType: "Marketing", salaryMin: 60000, salaryMax: 90000, salaryLabel: "₹60,000 - ₹90,000 /year" },
  { id: 3, company: "Rockstar Games New York", title: "HR Administration", location: "Manhattan, NY", posted: "2 days ago", tags: ["Temporary","On-site"], jobType: "HR", salaryMin: 45000, salaryMax: 70000, salaryLabel: "₹45,000 - ₹70,000 /year" },
  { id: 4, company: "Rockstar Games New York", title: "Full Stack Development", location: "Manhattan, NY", posted: "2 days ago", tags: ["Part-time","Remote"], jobType: "Engineering", salaryMin: 90000, salaryMax: 140000, salaryLabel: "₹90,000 - ₹1,40,000 /year" },
  { id: 5, company: "Rockstar Games New York", title: "Project Manager", location: "Manhattan, NY", posted: "2 days ago", tags: ["Freelancer","Remote"], jobType: "Management", salaryMin: 95000, salaryMax: 150000, salaryLabel: "₹95,000 - ₹1,50,000 /year" },
  { id: 6, company: "Rockstar Games New York", title: "Senior DevOps Engineer", location: "Manhattan, NY", posted: "2 days ago", tags: ["Contract","On-site"], jobType: "Engineering", salaryMin: 110000, salaryMax: 180000, salaryLabel: "₹1,10,000 - ₹1,80,000 /year" },
  { id: 7, company: "Bluewave Solutions", title: "Frontend Developer", location: "Bengaluru, India", posted: "1 day ago", tags: ["Full-time","On-site"], jobType: "Engineering", salaryMin: 50000, salaryMax: 120000, salaryLabel: "₹50,000 - ₹1,20,000 /year" },
  { id: 8, company: "Crescent Tech", title: "Graphic Designer", location: "Delhi, India", posted: "5 days ago", tags: ["Part-time","Remote"], jobType: "Design & Creative", salaryMin: 25000, salaryMax: 60000, salaryLabel: "₹25,000 - ₹60,000 /year" },
  { id: 9, company: "Greenline LLC", title: "Data Analyst", location: "Mumbai, India", posted: "3 days ago", tags: ["Full-time","On-site"], jobType: "Data", salaryMin: 70000, salaryMax: 120000, salaryLabel: "₹70,000 - ₹1,20,000 /year" },
  { id: 10, company: "Orbit Media", title: "Content Writer", location: "Remote", posted: "7 days ago", tags: ["Freelancer","Remote"], jobType: "Content", salaryMin: 20000, salaryMax: 50000, salaryLabel: "₹20,000 - ₹50,000 /year" },
  { id: 11, company: "Neon Labs", title: "QA Engineer", location: "Hyderabad, India", posted: "4 days ago", tags: ["Temporary","On-site"], jobType: "Engineering", salaryMin: 40000, salaryMax: 80000, salaryLabel: "₹40,000 - ₹80,000 /year" },
  { id: 12, company: "PixelCraft", title: "Illustrator", location: "Pune, India", posted: "6 days ago", tags: ["Part-time","Remote"], jobType: "Design & Creative", salaryMin: 30000, salaryMax: 65000, salaryLabel: "₹30,000 - ₹65,000 /year" },
  { id: 13, company: "Apex Innovations", title: "Android Developer", location: "Noida, India", posted: "1 day ago", tags: ["Full-time","On-site"], jobType: "Engineering", salaryMin: 70000, salaryMax: 130000, salaryLabel: "₹70,000 - ₹1,30,000 /year" },
  { id: 14, company: "Luma Health", title: "Product Designer", location: "Bengaluru, India", posted: "8 days ago", tags: ["Full-time","Remote"], jobType: "Design & Creative", salaryMin: 85000, salaryMax: 140000, salaryLabel: "₹85,000 - ₹1,40,000 /year" },
  { id: 15, company: "Quantum Soft", title: "Machine Learning Engineer", location: "Chennai, India", posted: "2 days ago", tags: ["Contract","On-site"], jobType: "Data", salaryMin: 120000, salaryMax: 200000, salaryLabel: "₹1,20,000 - ₹2,00,000 /year" },
  { id: 16, company: "Brightside", title: "Accountant", location: "Delhi, India", posted: "3 days ago", tags: ["Full-time","On-site"], jobType: "Finance", salaryMin: 35000, salaryMax: 70000, salaryLabel: "₹35,000 - ₹70,000 /year" },
  { id: 17, company: "Skyline Media", title: "Video Editor", location: "Remote", posted: "9 days ago", tags: ["Freelancer","Remote"], jobType: "Content", salaryMin: 25000, salaryMax: 55000, salaryLabel: "₹25,000 - ₹55,000 /year" },
  { id: 18, company: "Stellar Systems", title: "Backend Developer", location: "Gurgaon, India", posted: "2 days ago", tags: ["Full-time","Remote"], jobType: "Engineering", salaryMin: 80000, salaryMax: 150000, salaryLabel: "₹80,000 - ₹1,50,000 /year" },
  { id: 19, company: "Nimbus", title: "DevOps Intern", location: "Remote", posted: "12 days ago", tags: ["Temporary","Remote"], jobType: "Engineering", salaryMin: 15000, salaryMax: 25000, salaryLabel: "₹15,000 - ₹25,000 /year" },
  { id: 20, company: "Harbor Inc.", title: "Business Analyst", location: "Mumbai, India", posted: "4 days ago", tags: ["Full-time","On-site"], jobType: "Management", salaryMin: 60000, salaryMax: 110000, salaryLabel: "₹60,000 - ₹1,10,000 /year" },
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All Location");
  const [jobTitle, setJobTitle] = useState("All Job Titles");
  const [workFilter, setWorkFilter] = useState("All");
  const [jobType, setJobType] = useState("All Job Types");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(1000000);
  const [sortBy, setSortBy] = useState("default");
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid");

  // derived lists for select inputs
  const locations = useMemo(() => ["All Location", ...new Set(JOBS.map(j => j.location))], []);
  const jobTitles = useMemo(() => ["All Job Titles", ...new Set(JOBS.map(j => j.jobType))], []);
  const jobTypes = useMemo(() => ["All Job Types", ...new Set(JOBS.map(j => j.jobType))], []);

  const filtered = useMemo(() => {
    let out = JOBS.filter(job => {
      const matchesQuery = (job.title + ' ' + job.company).toLowerCase().includes(query.toLowerCase());
      const matchesLocation = (location === 'All Location') || job.location === location;
      const matchesTitle = (jobTitle === 'All Job Titles') || job.jobType === jobTitle;
      const matchesWork = (workFilter === 'All') || job.tags.includes(workFilter);
      const matchesJobType = (jobType === 'All Job Types') || job.jobType === jobType;
      const matchesSalary = job.salaryMin >= minSalary && job.salaryMax <= maxSalary;
      return matchesQuery && matchesLocation && matchesTitle && matchesWork && matchesJobType && matchesSalary;
    });

    if (sortBy === 'salary-asc') out = out.sort((a,b) => a.salaryMin - b.salaryMin);
    if (sortBy === 'salary-desc') out = out.sort((a,b) => b.salaryMax - a.salaryMax);
    if (sortBy === 'newest') out = out.sort((a,b) => new Date().getTime() - 0); // placeholder keep original order

    return out;
  }, [query, location, jobTitle, workFilter, jobType, minSalary, maxSalary, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page-1)*perPage, page*perPage);

  function resetPagination() { setPage(1); }

  return (
    <div className="min-h-screen bg-white px-8 py-8">
      <nav className="text-sm text-gray-500 mb-6">Home <span className="mx-2">•</span> <span className="text-gray-700">Find Jobs</span></nav>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Filters */}
        <aside className="col-span-3">
          <div className="bg-gray-50 border rounded shadow-sm p-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Search Company</label>
              <div className="relative">
                <input value={query} onChange={(e)=>{setQuery(e.target.value); resetPagination();}} placeholder="Job title, key words or company" className="w-full rounded border p-3 text-sm bg-white" />
                <div className="absolute left-3 top-3 text-gray-400">🔍</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Location</label>
              <select value={location} onChange={(e)=>{setLocation(e.target.value); resetPagination();}} className="w-full rounded border p-3 text-sm bg-white">
                {locations.map(loc=> <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Job Title</label>
              <select value={jobTitle} onChange={(e)=>{setJobTitle(e.target.value); resetPagination();}} className="w-full rounded border p-3 text-sm bg-white">
                {jobTitles.map(jt => <option key={jt} value={jt}>{jt}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">On-Site / Remote</label>
              <select value={workFilter} onChange={(e)=>{setWorkFilter(e.target.value); resetPagination();}} className="w-full rounded border p-3 text-sm bg-white">
                <option value="All">All</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Job Types</label>
              <select value={jobType} onChange={(e)=>{setJobType(e.target.value); resetPagination();}} className="w-full rounded border p-3 text-sm bg-white">
                {jobTypes.map(jt=> <option key={jt} value={jt}>{jt}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Salary (min)</label>
              <input type="number" value={minSalary} onChange={(e)=>{setMinSalary(Number(e.target.value)); resetPagination();}} className="w-full rounded border p-2 text-sm bg-white" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Salary (max)</label>
              <input type="number" value={maxSalary} onChange={(e)=>{setMaxSalary(Number(e.target.value)); resetPagination();}} className="w-full rounded border p-2 text-sm bg-white" />
            </div>

            <button onClick={()=>{ setQuery(''); setLocation('All Location'); setJobTitle('All Job Titles'); setWorkFilter('All'); setJobType('All Job Types'); setMinSalary(0); setMaxSalary(1000000); resetPagination(); }} className="w-full bg-green-600 text-white rounded py-3 font-semibold">Find Jobs</button>
          </div>
        </aside>

        {/* Right content */}
        <main className="col-span-9">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">{JOBS.length} jobs recommended for you</div>
              <div className="ml-4 inline-flex items-center gap-2 border rounded px-2 py-1 bg-white">
                <button onClick={()=>setView('grid')} className={`p-2 rounded ${view==='grid' ? 'bg-green-600 text-white' : 'text-gray-500'}`}>▦</button>
                <button onClick={()=>setView('list')} className={`p-2 rounded ${view==='list' ? 'bg-green-600 text-white' : 'text-gray-500'}`}>≡</button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select value={perPage} onChange={(e)=>{setPerPage(Number(e.target.value)); setPage(1);}} className="rounded border p-2 text-sm bg-white">
                <option value={6}>6 Per Page</option>
                <option value={12}>12 Per Page</option>
                <option value={24}>24 Per Page</option>
              </select>

              <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value); resetPagination();}} className="rounded border p-2 text-sm bg-white">
                <option value="default">Sort by (Default)</option>
                <option value="salary-asc">Salary: Low to High</option>
                <option value="salary-desc">Salary: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Jobs grid/list */}
          {view === 'grid' ? (
            <div className="grid grid-cols-2 gap-6">
              {visible.map(job => (
                <article key={job.id} className="border rounded p-5 bg-white shadow-sm hover:shadow-md relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-green-600 font-semibold">{job.company}</div>
                      <h3 className="text-lg font-bold mt-1">{job.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">📍 {job.location} • {job.posted}</div>

                      <div className="flex gap-2 mt-3 flex-wrap">
                        {job.tags.map((t, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="font-medium text-gray-700">{job.salaryLabel}</div>
                        <div className="text-sm text-gray-400">22 days left to apply</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <button className="w-9 h-9 rounded-full border flex items-center justify-center">♡</button>
                      <div className="text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {visible.map(job => (
                <article key={job.id} className="border rounded p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-green-600 font-semibold">{job.company}</div>
                    <h3 className="text-lg font-bold mt-1">{job.title}</h3>
                    <div className="text-sm text-gray-500 mt-1">📍 {job.location} • {job.posted}</div>
                    <div className="flex gap-2 mt-2">
                      {job.tags.map((t, idx) => <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-medium">{job.salaryLabel}</div>
                    <div className="text-sm text-gray-400 mt-2">22 days left to apply</div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing {(page-1)*perPage + 1} - {Math.min(page*perPage, filtered.length)} of {filtered.length} results</div>
            <div className="flex items-center gap-2">
              <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
              <div className="flex items-center gap-1">
                {Array.from({length: totalPages}).map((_,i)=> (
                  <button key={i} onClick={()=>setPage(i+1)} className={`px-3 py-1 border rounded ${page===i+1 ? 'bg-gray-200' : ''}`}>{i+1}</button>
                ))}
              </div>
              <button disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
