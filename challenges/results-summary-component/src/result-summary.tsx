import { Brain, Eye, MessageCircleCode, Zap } from "lucide-react";
import json_data from "../data.json";

export function ResultSummary() {
  return (
    <div className="card flex justify-center aspect-3/2 w-150 bg-white rounded-3xl">
      <TotalScoreSection />
      <SummarySection
        {...{ reaction: 80, memory: 80, verbal: 80, visual: 80 }}
      />
    </div>
  );
}

function StatRight({ val }: { val: number }) {
  return (
    <span className="stat__right">
      <span className="text-gray-500">
        <span className="text-black">{val}</span> / 100
      </span>
    </span>
  );
}

function SummarySection(score: {
  reaction: number;
  memory: number;
  verbal: number;
  visual: number;
}) {
  return (
    <section
      className="card__summary flex-3 flex flex-col rounded-3xl py-5 px-10"
      aria-labelledby="card-summary-score"
    >
      <div className="summary__title font-bold text-xl">Summary</div>
      <div className="stat reaction ">
        <span className="stat__left flex align-center align-middle">
          <Zap size={15} className="align-middle m-auto mr-3" />
          <span className="text-sm m-auto">Reaction</span>
        </span>
        <StatRight val={score.reaction} />
      </div>
      <div className="stat memory ">
        <span className="stat__left">
          <Brain size={15} className="align-middle m-auto mr-3" />
          <span>memory</span>
        </span>
        <StatRight val={score.memory} />
      </div>
      <div className="stat verbal ">
        <span className="stat__left">
          <MessageCircleCode size={15} className="align-middle m-auto mr-3" />
          <span>verbal</span>
        </span>
        <StatRight val={score.verbal} />
      </div>
      <div className="stat visual ">
        <span className="stat__left">
          <Eye size={15} className="align-middle m-auto mr-3" />
          <span>visual</span>
        </span>
        <StatRight val={score.visual} />
      </div>
      <div>
        <button className="btn">Continue</button>
      </div>
    </section>
  );
}

function TotalScoreSection() {
  return (
    <section
      className="card__totalscore flex-3 rounded-3xl flex flex-col items-center px-10 py-5 text-white"
      aria-labelledby="card-total-score"
    >
      <div className="text-lg font-bold text-white/80">Your Result</div>
      <TotalScore val={76} />
      <div className="text-2xl mb-3">Great</div>
      <p className="text-white/70 text-16 text-center">
        You Scored higher than 65% of people who have takn these test
      </p>
    </section>
  );
}

function TotalScore({ val }: { val: number }) {
  return (
    <div className="total_score aspect-square mt-5 mb-7 w-38 rounded-full flex flex-col justify-center items-center">
      <div className="text-5xl font-bold">76</div>
      <div className="text-gray-400">of 100</div>
    </div>
  );
}
