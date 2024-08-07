import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, ArrowRight, Star, Moon, Sun, Fish, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const catBreeds = [
  { name: "Siamese", description: "Vocal and social cats known for their distinctive color points.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", description: "Long-haired cats with a sweet, gentle nature and round faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", description: "Large, friendly cats with tufted ears and long, fluffy tails.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "British Shorthair", description: "Chunky cats with round faces and dense, plush coats.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
  { name: "Scottish Fold", description: "Known for their unique folded ears and owl-like appearance.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg" },
];

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [catHappiness, setCatHappiness] = useState(50);
  const [treats, setTreats] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
      setCatHappiness(Math.floor(Math.random() * 100));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGiveTreat = () => {
    setTreats(treats + 1);
    setCatHappiness(Math.min(catHappiness + 10, 100));
    toast({
      title: "Treat given!",
      description: "Your cat is purring with delight!",
      duration: 2000,
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-6xl font-bold flex items-center justify-center text-purple-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cat className="mr-4 h-16 w-16" /> Feline Fascination
          </motion.h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Sun className="h-4 w-4 mr-2" />
                  <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                  <Moon className="h-4 w-4 ml-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle dark mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[600px] rounded-xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="absolute bottom-4 right-4 flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => setLikes(likes + 1)}
              >
                <Heart className="mr-2 h-4 w-4" /> Like ({likes})
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={handleGiveTreat}
              >
                <Fish className="mr-2 h-4 w-4" /> Give Treat ({treats})
              </Button>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-2 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="text-yellow-500 mr-2" />
              <span className="font-bold">Cat Happiness:</span>
              <Progress value={catHappiness} className="w-24 ml-2" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className={`mb-12 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="mr-2" /> Cat Fact of the Moment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} italic`}
                >
                  "{catFacts[currentFactIndex]}"
                </motion.p>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="characteristics" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card className={isDarkMode ? 'bg-gray-800 text-white' : ''}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Paw className="mr-2" /> Cat Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {["Excellent hunters", "Flexible bodies", "Quick reflexes", "Keen senses", "Night vision", "Complex communication"].map((trait, index) => (
                    <motion.li
                      key={trait}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-center ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} p-3 rounded-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="secondary" className="mr-2">{index + 1}</Badge>
                      {trait}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {catBreeds.map((breed, index) => (
                  <CarouselItem key={breed.name}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold text-2xl mb-2">{breed.name}</h3>
                        <p className="text-gray-600 text-center">{breed.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800/80 text-white' : 'bg-white/80'} backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="mr-2" /> About Cats
              </CardTitle>
              <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>Discover the world of our feline friends</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                Cats are enigmatic creatures that have captivated humans for millennia. Known for their independence, agility, and affectionate nature, these furry companions continue to charm us with their unique personalities and mysterious ways.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full group">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Alert>
            <Gift className="h-4 w-4" />
            <AlertTitle>New Feature!</AlertTitle>
            <AlertDescription>
              You can now give treats to increase your cat's happiness. Try it out above!
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
