import Header from "@/components/Header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-[#001824]">
      <Header />
      {children}
    </div>
  );
}
