import aboutImg from "@assets/about-look-up.avif";
import MainHeadingCmp from "../../../../common/components/texts/MainHeadingCmp/MainHeadingCmp";
import TopDescriptionCmp from "../../../../common/components/texts/TopDescriptionCmp/TopDescriptionCmp";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <MainHeadingCmp headingText="About Look Up" />
      <TopDescriptionCmp
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC 'Sed ut perspiciatis
        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt."
      />

      <TopDescriptionCmp
        descriptionText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
      rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo 
      minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem 
      quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non"
      />

      <img src={aboutImg} alt="Look Up CEO image" />
      <h3>Joanna Hornung</h3>
      <h4>Look Up CEO</h4>
    </div>
  );
};

export default AboutPage;
