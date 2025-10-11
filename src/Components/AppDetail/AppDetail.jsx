import { use } from "react";


export default function AppDetail({ itemsPromise }) {

    const appData = use(itemsPromise)
    return (
        <div className="w-full min-h-screen bg-gray-100 flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl flex flex-col gap-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* App Image */}
                    <img
                        src="/public/image53114-z3m-400w.png"
                        alt="App"
                        className="w-72 h-72 object-cover rounded-lg"
                    />
                    {/* Right Content */}
                    <div className="flex flex-col gap-6 flex-1 min-w-[250px]">
                        <h1 className="text-3xl font-bold text-gray-900">
                            SmPlan: ToDo List with Reminder
                        </h1>
                        <div className="w-full h-[1px] bg-black/20" />

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6">
                            <div className="flex flex-col items-start min-w-[100px]">
                                <span className="text-gray-700/80 text-sm">Downloads</span>
                                <span className="text-4xl font-bold text-gray-900">8M</span>
                            </div>
                            <div className="flex flex-col items-start min-w-[100px]">
                                <span className="text-gray-700/80 text-sm">Average Ratings</span>
                                <span className="text-4xl font-bold text-gray-900">4.9</span>
                            </div>
                            <div className="flex flex-col items-start min-w-[100px]">
                                <span className="text-gray-700/80 text-sm">Total Reviews</span>
                                <span className="text-4xl font-bold text-gray-900">54K</span>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-md w-max transition-colors">
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-black/20" />

                {/* Description */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Description</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Users can create custom work and break intervals, track sessions, and review detailed statistics about focus habits. The design is minimal and calming, reducing cognitive load so you can focus entirely on tasks.
                        <br /><br />
                        Integration of task lists with timers allows a structured schedule, and analytics show time spent per task. Optional background sounds create a distraction-free atmosphere.
                        <br /><br />
                        Motivational streaks and achievements help combat procrastination, making the app engaging. Suitable for studying, coding, writing, or office work, this Pomodoro app acts as a personal trainer for your brain, keeping you disciplined and productive.
                    </p>
                </div>
            </div>
        </div>

    );
}