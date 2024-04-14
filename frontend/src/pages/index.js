import { Card, Text } from "@components";

export default function Main() {
  return (
    <div className="flex flex-row items-center justify-center gap-[60px] w-full h-screen">
      <Card className="bg-gray-200 w-64 h-64 p-4 rounded-lg flex justify-center items-center shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
        <Text className="text-center text-3xl">Rent GPU</Text>
      </Card>

      <Card className="bg-gray-200 w-64 h-64 p-4 rounded-lg flex justify-center items-center shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
        <Text className="text-center text-3xl">Provide GPU</Text>
      </Card>
    </div>
  );
}
