import { cn } from "@/lib/utils";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

const ProcessSteps = ({
  title = "Our Installation Process",
  subtitle = "We follow a proven process to ensure exceptional results for every flooring project.",
  steps,
  className
}: ProcessStepsProps) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">{title}</h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              
              {/* Connecting line (except last item) */}
              {step.number < steps.length && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/30"></div>
              )}
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
