const SellingDetails = () => {
  return (
    <div className="text-center">
     <div className="mb-6">
     <h1 className="text-2xl md:text-5xl font-bold font-poppins text-secondary mb-2">OUR ACHIEVEMENTS</h1>
     <p className="w-1/2 mx-auto">Our dedication to quality has been recognized through numerous accolades, including multiple industry awards for excellence in hospitality and guest service.</p>
     </div>
      <div className="md:stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Sold</div>
          <div className="stat-value">3K</div>
          <div className="stat-desc">From January 1st 2024 to April 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Active Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Member</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default SellingDetails;
