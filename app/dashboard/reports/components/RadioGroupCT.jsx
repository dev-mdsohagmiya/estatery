import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupCT() {
  return (
    <RadioGroup className="flex" defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label
          className="text-[13px] md:text-[14px] text-graylight font-medium"
          htmlFor="r1"
        >
          Expense
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label
          className="text-[13px] md:text-[14px] text-graylight font-medium"
          htmlFor="r2"
        >
          Income
        </Label>
      </div>
    </RadioGroup>
  );
}
