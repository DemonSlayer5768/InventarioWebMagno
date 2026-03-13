// Login.tsx
import LoginForm from "@/components/Layout/LoginForm";
import LightPillar from "@/components/ui/ligthPilar";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center relative bg-linear-to-br from-gray-950 via-gray-900 to-purple-950">
      <LightPillar
        topColor="#1414b8"
        bottomColor="#1d1d86"
        intensity={0.8}
        rotationSpeed={0.2}
        glowAmount={0.004}
        pillarWidth={4}
        pillarHeight={0.5}
        noiseIntensity={0.3}
        pillarRotation={20}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
      <div className="flex h-screen w-full items-center justify-center backdrop-blur-[2px]">
        <LoginForm />
      </div>
    </div>
  );
}
