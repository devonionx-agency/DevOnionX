export default function FaqStats() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white">
        Answers To Common Questions
      </h3>

      <p className="mt-4 text-white/70">
        Everything you need to know before starting your next digital project.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="text-3xl font-bold text-orange-400">15+</div>

          <p className="mt-2 text-white/70">Projects Delivered</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="text-3xl font-bold text-orange-400">99%</div>

          <p className="mt-2 text-white/70">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
}
