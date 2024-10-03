import Header from "@/components/Header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1b2b5e]">
      <Header />
      {children}
    </div>
  );
}
