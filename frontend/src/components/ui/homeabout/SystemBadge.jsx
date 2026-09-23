const SystemBadge = ({ label, status }) => {
  return (
    <div className="system-badge absolute z-20 flex items-center gap-2 rounded-full border border-[#ff5101]/15 bg-white/80 px-3 py-1.5 shadow-[0_8px_30px_rgba(20,30,40,0.05)] backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5101]/40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5101]" />
      </span>

      <span className="font-inter text-[10px] font-medium tracking-wide text-[#435268]">
        {label}
      </span>

      {status && (
        <>
          <span className="h-3 w-px bg-[#d9dee5]" />

          <span className="font-inter text-[9px] text-[#8792a2]">{status}</span>
        </>
      )}
    </div>
  );
};

export default SystemBadge;
