import { Card } from "antd";

export default function StatCard({
  title,
  value,
  sub,
  icon,
}) {
  return (
    <Card
      style={{
        borderRadius: 18,
        height: 150,
      }}
    >
      <div className="flex justify-between">
        <div>
          <p>{title}</p>
          <h1>{value}</h1>
          <span>{sub}</span>
        </div>

        <div>{icon}</div>
      </div>
    </Card>
  );
}