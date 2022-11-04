import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Flex,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../Redux/Search/app.actions";
import { BrowserFundingCard } from "./BrowserFundingCard";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

export default function CardSlider() {
  const [filter, setFilter] = useState("");
  const { funds } = useSelector((state) => state.AppReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdata(""));
  }, []);

  // console.log(funds);
  const data = [
    {
      id: 1,
      raisedBy: "Family Friends",
      category: "medical",
      location: "Mumbai",
      title:
        "My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please Save Him",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=768&dpr=1.0",
      goal: "₹ 5,00,00,000",
      raised: "₹ 4,02,76,499",
      daysLeft: 37,
      supporters: 20679,
      about: [
        {
          desc: [
            "My son has been fighting for his life since he was a 5-year-old. Now years later, he is still fighting. However, the cancer seems to take more and more control of his body. I can’t help but think, will God spare my child this time or will cancer actually take him away from me?",
            "What goes on in a mother’s mind when any time she visits the hospital with her son, she is informed that his cancer has relapsed? Having faced that situation thrice, I pray to God none of the parents ever have the ill fortune to witness their own child suffering from cancer from time and again. My family's happiness lies in Abir. Him being the youngest member of my family of four, all of us are accustomed to his joyous and playful. When he became extremely sick the first time, he was scared and sad. Yet he tried to cheer all of us up as much as he could.",
            "What my son has been going through for years is awful. But we have had the opportunity to at least seek treatment for him. We understand thousands of little children are going through exactly the same, and possibly worse, than Abir. Hence, all contributions after funding the treatment cost will be used to fund cancer research and to launch a digital platform to support and empower Indian families and children suffering from cancer by bringing together 1000s of survivors, cancer doctors and experts, insurance companies, and a network of supporters to create a resilient ecosystem to beat cancer together.",
          ],
          images: [
            "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/5f91656a1d350.jpeg?w=700&dpr=1.0",
            "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/5f916595e6083.jpeg?w=700&dpr=1.0",
          ],
        },
      ],
    },
    {
      id: 2,
      raisedBy: "Pooja Reddy",
      category: "medical",
      location: "Mumbai",
      title: "Feeding From Far-Ration Distribution Amid Lockdown",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/6089ceb85c0bd.jpeg?w=768&dpr=1.0",
      goal: "₹ 59,00,000",
      raised: "₹ 4,80,76,739",
      daysLeft: 166,
      supporters: 12476,
      about: [
        {
          desc: [
            "As the country heals, it still feels like we're lagging where hunger still remains an urgency even if the pandemic is not.If it was bad, it's becoming even worse.The people have suffered for nearly 2 years now, and very soon, we will reach to point of HUNGER CRISIS; they will die of HUNGER before the virus hits them.",
            "Feeding From Far is an initiative that has been feeding the poor and unemployed who are struggling to feed themselves during the lockdown. We managed to distribute over 30 lakh meals to the needy since the first lockdown hit through cooked meals and ration kits.",
            "Even as the lockdown is being lifted across the world, the issue of hunger still looms around. Please keep supporting us, your little help can bring them much closer to their distant dreams.",
          ],
          images: [
            "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/607c8f9aadc90.jpeg?w=376&dpr=1.0",
            "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/624b30a3a741f.jpeg?w=376&dpr=1.0",
          ],
        },
      ],
    },
    {
      id: 3,
      raisedBy: "Mansi Singh",
      category: "medical",
      location: "Delhi",
      title:
        "Help Father And His 20-Year Old Son, Father-Kidney Transplant, Son- Bone Marrow Transplant. Please Save The Family",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/218000/218792/image/60326899153a5.jpeg?w=480&dpr=1.0",
      goal: "₹ 1,60,00,000",
      raised: "₹ 1,52,56,282",
      daysLeft: 166,
      supporters: 12476,
      about: [
        {
          desc: [
            "I am raising funds for my cousin Anant and his father Mr. Bhaskar Chand on behalf of his mother. Anant is suffering from Aplastic anaemia in which body fails to produce enough blood cells and the only cure is Bone marrow transplant. His father is suffering from chronic kidney failure and needs urgent kidney transplant to survive, his wife is donating the kidney in order to save his life",
            "Till now around 30 Lakh rupees have been used in Anant's treatment till now and 1.3 lakh required every month for his medication excluding his bone marrow transplant which still require a backup amount of 50 lakhs for happening in nearest future when the donor arrives. His father's transplant is planned to be done in Feb 2021 which will cost around 20 Lakh and some post treatments which will arrive with it. This cost will be compensated from Anant's fund collected till date.",
            "The family still need an amount of 50 lakh to be collected till the day transplant occurs and and additional 1.3 lakhs every month to stabilise Anant.",
          ],
          images: [
            "https://kettocdn.gumlet.io/media/campaign/218000/218792/image/6032661fbce99.jpeg?w=376&dpr=1.0",
            "https://kettocdn.gumlet.io/media/campaign/218000/218792/image/6032665c39706.jpeg?w=376&dpr=1.0",
          ],
        },
      ],
    },
    {
      id: 4,
      raisedBy: "Nithilyam Spastic Children Welfare Trust",
      category: "education",
      location: "Delhi",
      title: "Schooling Special Needs Children With Custom Education",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/5fa2e0550e953.jpeg?w=480&dpr=1.0",
      goal: "₹ 50,00,000 ",
      raised: "₹ 47,50,606",
      daysLeft: 42,
      supporters: 2435,
      about: [
        {
          desc: [
            "Children with special needs seldom graduate in India. And this is not entirely because of their inability to cope with high school and college. Our educational system uses standardized methods that are ineffective in imparting knowledge and evaluating skills of differentially abled learners.",
            "The children will be assessed by a child neurologist and therapists for clear identification and classification of their difficulties and plan targeted therapy to get them into a normal school curriculum.  This would enable the understanding and application of learning principles and advance their education.",
            "NISSARC (Nithilyam Special School & Adelaide Rehabilitation Centre)will provide the necessary space for the therapists and children for this project. The main cost comes from the therapy sessions which have to be tailored according to the children's needs. We need an occupational therapist, Physiotherapist, speech Facilitator and a special educator for these thirty children. We will also need to arrange transport and food for them. ",
          ],
          images: [
            "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/5fa2e0550e953.jpeg?w=480&dpr=1.0",
            "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/5fa2de60a1557.jpeg?w=480&dpr=1.0",
          ],
        },
      ],
    },
    {
      id: 5,
      raisedBy: "Vidya Bhawan Society",
      category: "education",
      location: "Delhi",
      title: "BACK TO SCHOOL",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/445000/445343/image/62a85c9563b7a.jpg?w=480&dpr=1.0",
      goal: "₹ 1,50,00,000 ",
      raised: "₹ 21,82,191",
      daysLeft: 13,
      supporters: 359,
      about: [
        {
          desc: [
            "I have a younger sister who is also at Vidya Bhawan, and a younger brother who is two years old. My mother looks after our brother and she does farming. She lets us take the corn from our fields and take our goats to the mountains. Our father drives taxis.",
            "Vidya Bhawan urgently needs help to continue to provide education to 500 students who cannot pay their fees because of Covid-19. Without immediate assistance, many students - especially girls - will drop out and will never return. They will be forced into child labor and early marriage, and subjected to violence and abuse. Instead, with your help, they can go back to school and realize their dreams.",
            "For ninety years Vidya Bhawan has worked closely with local communities to provide wholesome education for all. In normal times, 4,000 diverse students from southern Rajasthan’s lowest income households study on a 600-acre campus with sports grounds, libraries, laboratories and opportunities for art, craft and the exploration of nature. (At present, due to Covid-19, learning is offered online). This rounded learning, combined with a commitment to peace and tolerance, makes Vidya Bhawan students responsible and civic-minded. Many of these responsible alumni are now doctors on the frontline of India’s Covid-19 response, teachers counselling their students, or are organizing their communities to help each other. ",
          ],
          images: [
            "https://lh3.googleusercontent.com/h39_kJDQqLtOOvtIzR3h554oVjCxuNpTinw7j_HrL-Q7SGcB5ixuCW7Q1emv57uVwmcEtayZ5RU9bdGvgh_DfJDnxFtI1Q9_l-rWok4W597gGpoDTA7VQEwO-KvddR4TX_2mvw-u",
            "https://kettocdn.gumlet.io/media/campaign/445000/445343/image/60f78c8a43365.jpeg?w=376&dpr=1.0",
          ],
        },
      ],
    },
    {
      id: 6,
      raisedBy: "Rachaittri Gupta",
      category: "education",
      location: "Delhi",
      title: "Higher Education At Filmschool, FTII And Daily Expenses",
      mainImg:
        "https://kettocdn.gumlet.io/media/campaign/364000/364857/image/622fd84467a1d.jpeg?w=480&dpr=1.0",
      goal: "₹ 6,75,686",
      raised: "₹ 1,00,00,000 ",
      daysLeft: 74,
      supporters: 104,
      about: [
        {
          desc: [
            "Hi I am Rachaittri i was an actor and dancer. Im a simple girl from a middle class family. Few years back had an accident and broke my spine because of which my legs got paralysed. Im totally on wheelchair now. Spent a lot of time in treatments. But now I want to focus on my career and start earning money for my parents. I applied to the best film institute in Asia, FTII (film and television institute of india.",
            "But here i need your help and support. I dont have money to pay the fee and monthly expenses of medicals and a nurse.",
            "I really hope that you understand that it takes a lot of courage to restart your career at the age of 32. But i have taken a stand and really want you to help me out with whatever you can. ",
          ],
          images: [
            "https://kettocdn.gumlet.io/media/campaign/364000/364857/image/6067a67cd5cef.jpeg?w=480&dpr=1.0",
            "https://kettocdn.gumlet.io/media/campaign/364000/364857/image/622fd92948bce.jpeg?w=480&dpr=1.0",
          ],
        },
      ],
    },
  ];

  const [sliderData, setSliderData] = useState([data[0], data[1], data[2]]);
  const [lastSlide, setLastSlide] = useState(2);

  const onNextHandler = () => {
    if (lastSlide === 5) {
      setLastSlide(2);
      setSliderData([
        data[lastSlide - 2],
        data[lastSlide - 1],
        data[lastSlide],
      ]);
      console.log(lastSlide, sliderData);
    } else if (lastSlide >= 2) {
      setLastSlide(lastSlide + 1);
      setSliderData([
        data[lastSlide - 1],
        data[lastSlide],
        data[lastSlide + 1],
      ]);
      console.log(lastSlide, sliderData);
    }
  };
  const onPrevHandler = () => {
    if (lastSlide === 2) {
      setSliderData([
        data[lastSlide - 2],
        data[lastSlide - 1],
        data[lastSlide],
      ]);
    } else {
      setSliderData([
        data[lastSlide - 3],
        data[lastSlide - 2],
        data[lastSlide - 1],
      ]);
    }
  };
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width={["100%", "60%", "100%"]}>
      <Flex alignItems={"center"} mt={"8"} justifyContent={"center"}>
        <Button colorScheme={"none"} onClick={() => onPrevHandler()}>
          <ChevronLeftIcon
            color="teal.400"
            fontSize={"6xl"}
            display={["none", "none", "block"]}
          />
        </Button>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
          marginTop={10}
          width={["70%", "40%", "70%"]}
        >
          {sliderData?.length > 0 &&
            sliderData.map((ele) => (
              <Fade in={"true"}>
                <GridItem key={ele.id} width={"100%"}>
                  <BrowserFundingCard
                    mainImg={ele.mainImg}
                    title={ele.title}
                    goal={ele.goal}
                    daysLeft={ele.daysLeft}
                    supporters={ele.supporters}
                    raisedBy={ele.raisedBy}
                    raised={ele.raised}
                  />
                </GridItem>
              </Fade>
            ))}
        </Grid>
        <Button colorScheme={"none"} onClick={onToggle}>
          <ChevronRightIcon
            color="teal.400"
            fontSize={"6xl"}
            onClick={() => onNextHandler()}
            display={["none", "none", "block"]}
          />
        </Button>
      </Flex>
    </Box>
  );
}
