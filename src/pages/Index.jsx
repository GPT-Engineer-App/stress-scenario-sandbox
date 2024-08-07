import { useState } from "react";
import { Cat, Heart, Info, Paw } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const catBreeds = [
  { name: "Siamese", description: "Vocal and social cats known for their distinctive color points." },
  { name: "Persian", description: "Long-haired cats with a sweet, gentle nature and round faces." },
  { name: "Maine Coon", description: "Large, friendly cats with tufted ears and long, fluffy tails." },
  { name: "British Shorthair", description: "Chunky cats with round faces and dense, plush coats." },
  { name: "Scottish Fold", description: "Known for their unique folded ears and owl-like appearance." },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-4 h-12 w-12" /> Feline Fascination
        </motion.h1>

        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-xl shadow-2xl"
          />
          <Button 
            className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600"
            onClick={() => setLikes(likes + 1)}
          >
            <Heart className="mr-2 h-4 w-4" /> Like ({likes})
          </Button>
        </motion.div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2" /> About Cats
            </CardTitle>
            <CardDescription>Discover the world of our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-4">
              Cats are enigmatic creatures that have captivated humans for millennia. Known for their independence, agility, and affectionate nature, these furry companions continue to charm us with their unique personalities and mysterious ways.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Paw className="mr-2" /> Cat Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially hearing and night vision</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cat className="mr-2" /> Popular Cat Breeds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {catBreeds.map((breed, index) => (
                    <motion.li 
                      key={breed.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow"
                    >
                      <h3 className="font-semibold text-lg">{breed.name}</h3>
                      <p className="text-gray-600">{breed.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
