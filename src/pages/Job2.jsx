import React, { useMemo, useState } from "react";

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

export default function Job2() {
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
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState(new Set());

  const locations = useMemo(() => ["All Location", ...new Set(JOBS.map(j => j.location))], []);
  const jobTitles = useMemo(() => ["All Job Titles", ...new Set(JOBS.map(j => j.jobType))], []);
  const jobTypes = useMemo(() => ["All Job Types", ...new Set(JOBS.map(j => j.jobType))], []);

  const filtered = useMemo(() => {
    let out = JOBS.filter(job => {
      const matchesQuery = (job.title + ' ' + job.company).toLowerCase().includes(query.toLowerCase());
      const matchesLocation = location === 'All Location' || job.location === location;
      const matchesTitle = jobTitle === 'All Job Titles' || job.jobType === jobTitle;
      const matchesWork = workFilter === 'All' || job.tags.includes(workFilter);
      const matchesJobType = jobType === 'All Job Types' || job.jobType === jobType;
      const matchesSalary = job.salaryMin >= minSalary && job.salaryMax <= maxSalary;
      return matchesQuery && matchesLocation && matchesTitle && matchesWork && matchesJobType && matchesSalary;
    });

    if (sortBy === 'salary-asc') out.sort((a, b) => a.salaryMin - b.salaryMin);
    if (sortBy === 'salary-desc') out.sort((a, b) => b.salaryMax - a.salaryMax);
    if (sortBy === 'newest') out = out.reverse();

    return out;
  }, [query, location, jobTitle, workFilter, jobType, minSalary, maxSalary, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  const resetPagination = () => setPage(1);

  const toggleSave = (id) => {
    setSavedJobs(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div>
            <p className="text-center font-bold py-3">Interview registration cost is 5850 only</p>
        </div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4 flex items-center gap-1">
        <span>Home</span>
        <span className="mx-1">•</span>
        <span className="text-gray-700">Find Jobs</span>
      </nav>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5" />
            Filters
          </span>
          <span>{isFiltersOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* Filters Sidebar */}
        <aside className={`${isFiltersOpen ? 'block' : 'hidden'} md:block md:col-span-3`}>
          <div className="bg-gray-50 border rounded-lg shadow-sm p-4 sm:p-6 space-y-4">
            {/* Search */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Search</label>
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); resetPagination(); }}
                  placeholder="Job title, company..."
                  className="w-full pl-10 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Location</label>
              <select
                value={location}
                onChange={(e) => { setLocation(e.target.value); resetPagination(); }}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Job Title</label>
              <select
                value={jobTitle}
                onChange={(e) => { setJobTitle(e.target.value); resetPagination(); }}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {jobTitles.map(jt => <option key={jt} value={jt}>{jt}</option>)}
              </select>
            </div>

            {/* Work Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Work Type</label>
              <select
                value={workFilter}
                onChange={(e) => { setWorkFilter(e.target.value); resetPagination(); }}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All">All</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Job Type</label>
              <select
                value={jobType}
                onChange={(e) => { setJobType(e.target.value); resetPagination(); }}
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {jobTypes.map(jt => <option key={jt} value={jt}>{jt}</option>)}
              </select>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Min ₹</label>
                <input
                  type="number"
                  value={minSalary}
                  onChange={(e) => { setMinSalary(Number(e.target.value)); resetPagination(); }}
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Max ₹</label>
                <input
                  type="number"
                  value={maxSalary}
                  onChange={(e) => { setMaxSalary(Number(e.target.value)); resetPagination(); }}
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setQuery(''); setLocation('All Location'); setJobTitle('All Job Titles');
                setWorkFilter('All'); setJobType('All Job Types'); setMinSalary(0); setMaxSalary(1000000);
                resetPagination();
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition flex items-center justify-center gap-2"
            >
              <RefreshIcon className="w-4 h-4" />
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-9">
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600">{filtered.length} jobs found</p>
              <div className="flex items-center gap-1 border rounded-md overflow-hidden">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 ${view === 'grid' ? 'bg-green-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label="Grid view"
                >
                  <GridIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 ${view === 'list' ? 'bg-green-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label="List view"
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={perPage}
                onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}
                className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-i500"
              >
                <option value={6}>6 / page</option>
                <option value={12}>12 / page</option>
                <option value={24}>24 / page</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); resetPagination(); }}
                className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="default">Default</option>
                <option value="salary-asc">Salary: Low to High</option>
                <option value="salary-desc">Salary: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Jobs Grid / List */}
          {view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map(job => (
                <article
                  key={job.id}
                  className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-green-600">{job.company}</p>
                    <h3 className="text-base font-bold mt-1 line-clamp-2">{job.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" /> {job.location} • {job.posted}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-gray-800">{job.salaryLabel}</p>
                      <p className="text-xs text-gray-400 mt-1">22 days left</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSave(job.id)}
                        aria-label="Save job"
                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        {savedJobs.has(job.id) ? (
                          <HeartFilledIcon className="w-5 h-5 text-red-500" />
                        ) : (
                          <HeartIcon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      <span className="text-yellow-400 text-sm flex">
                        <StarIcon className="w-4 h-4 fill-current" />
                        <StarIcon className="w-4 h-4 fill-current" />
                        <StarIcon className="w-4 h-4 fill-current" />
                        <StarIcon className="w-4 h-4 fill-current" />
                        <StarIcon className="w-4 h-4 fill-current" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {visible.map(job => (
                <article
                  key={job.id}
                  className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-green-600">{job.company}</p>
                    <h3 className="text-base font-bold mt-1">{job.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" /> {job.location} • {job.posted}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 text-sm">
                    <div className="text-right">
                      <p className="font-medium text-gray-800">{job.salaryLabel}</p>
                      <p className="text-xs text-gray-400 mt-1">22 days left</p>
                    </div>
                    <button
                      onClick={() => toggleSave(job.id)}
                      aria-label="Save job"
                      className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      {savedJobs.has(job.id) ? (
                        <HeartFilledIcon className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-600">
              Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, filtered.length)} of {filtered.length}
            </p>
            <div className="flex items-center gap-1">
              <button
                disabled={page === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="px-3 py-1.5 border rounded disabled:opacity-50 hover:bg-gray-50 flex items-center gap-1"
              >
                <ChevronLeftIcon className="w-4 h-4" /> Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1.5 border rounded ${page === i + 1 ? 'bg-green-600 text-white' : 'hover:bg-gray-50'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 border rounded disabled:opacity-50 hover:bg-gray-50 flex items-center gap-1"
              >
                Next <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// SVG Icons (Heroicons v2 style)
const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V20a1 1 0 01-1.555.832L9 18.202a1 1 0 01-.445-.832v-3.556a1 1 0 00-.293-.707L1.707 6.293A1 1 0 011 5.586V4z" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const GridIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ListIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const HeartFilledIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636 10.682 6.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.316 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const RefreshIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582A7.003 7.003 0 0112 4c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);