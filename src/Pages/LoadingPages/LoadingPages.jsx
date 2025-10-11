

export function LoadingPages() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-5">
            <span className="loading loading-ring text-[#9f62f2] w-10"></span>
            <h1 className="text-[20px] leading-tight bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Loading...</h1>

        </div>
    );
}