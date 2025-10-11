

export function LoadingPages() {
    return (
        <div className="bg-white w-screen h-screen flex flex-col items-center justify-center gap-5">
            <span className="loading loading-spinner w-10 text-[#9f62f2]"></span>
            <h1 className="text-[20px] leading-tight bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Loading...</h1>

        </div>
    );
}