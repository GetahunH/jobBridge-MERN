import { GoLocation } from 'react-icons/go';
import moment from "moment";
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`} className="block">
      <div className="w-full max-w-[20rem] bg-white rounded-lg shadow-md px-5 py-6 transition-transform hover:scale-105">
        {/* Company Info & Job Title */}
        <div className="flex gap-4 items-center">
          <img 
            src={job?.company?.profileUrl} 
            alt={job?.company?.name} 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap">
              {job?.jobTitle}
            </p>
            <span className="flex gap-2 items-center text-gray-600 text-sm">
              <GoLocation className="text-gray-700" />
              {job?.location}
            </span>
          </div>
        </div>

        {/* Job Description */}
        <div className="py-3">
          <p className="text-sm text-gray-700">
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        {/* Job Type & Time Posted */}
        <div className="flex items-center justify-between">
          <p className="bg-blue-100 text-blue-700 py-1 px-2 rounded-full font-semibold text-sm">
            {job?.jobType}
          </p>
          <span className="text-gray-500 text-sm">
            {moment(job?.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
