import "./SearchResult.css";
import { Link } from "react-router-dom";
export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
     
    >
      
      <Link
								to={`/profile/${result.username}`}
								className='flex items-center justify-between gap-4'
								key={result._id}
							>
								<div className='flex gap-2 items-center'>
									<div className='avatar'>
										<div className='w-8 rounded-full'>
											<img src={result.profileImg || "/avatar-placeholder.png"} />
										</div>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28'>
											{result.fullName}
										</span>
										<span className='text-sm text-slate-500'>@{result.username}</span>
									</div>
								</div>
								<div>
								
								</div>
							</Link>




    </div>
  );
};