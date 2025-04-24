import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HeroStatCard = ({ label, value }) => {
  return (
    <Card className="bg-white/5 h-32 border border-white/10 rounded-lg text-center card-hover">
      <CardHeader>
        <CardTitle className="text-center text-white animate-pulse">
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center font-medium text-[#8f7d5e]">{label}</p>
      </CardContent>
    </Card>
  );
};

export default HeroStatCard;
