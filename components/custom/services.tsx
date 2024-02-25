"use client";
import React from "react";
import { MyCard } from "./my-card";

export function Services() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 py-4 justify-center">
        <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211392385108410440/ruben_p_data_science_in_the_21st_century_minimalist_clean_simpl_fff60e5f-63e3-4713-81e2-9fa29c0b63af.png?ex=65ee0813&is=65db9313&hm=a50f6f699dc89bd207413434a010c04c030d9f29512fa38b22f59d5324eebd35&=&format=webp&quality=lossless&width=905&height=905"
          title="Data Science"
          description="Use AI models to create value from your data."
        ></MyCard>
        <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211385589824487525/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_fc820099-0859-4dcb-825b-6e27eac6bb26.png?ex=65ee01bf&is=65db8cbf&hm=d4144e15f67194d3cb9729fd7753dc1ebe98c3987149cbe9d9bfb0cb5068cd1a&=&format=webp&quality=lossless&width=905&height=905"
          title="Data Analytics"
          description="Extract valuable insights from your data."
        ></MyCard>
              <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211395424947277945/ruben_p_data_governance_in_the_21st_century_minimalist_clean_si_c13b2669-b968-4d84-b491-13c34cd6931f.png?ex=65ee0ae7&is=65db95e7&hm=0d9394bdc1140837d706e5a953669a7310c2ae2e37a8a741ffef968ef222d361&=&format=webp&quality=lossless&width=810&height=810"
          title="Data engineering"
          description="Streamline your data pipelines."
        ></MyCard>


            <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211413442867503134/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_b155915c-b52d-4f5f-8573-37f035649b62.png?ex=65ee1baf&is=65dba6af&hm=55480d5f394aa86586ce9997be81289afead5ef117f2ff53f44861ae07320daf&=&format=webp&quality=lossless&width=810&height=810"
          title="Web development"
          description="Create visibility and traction for your company."
        ></MyCard>
              <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211393906516697229/ruben_p_data_governance_in_the_21st_century_minimalist_clean_si_2fdd998b-bf5a-460b-a749-3b33f7588d63.png?ex=65ee097d&is=65db947d&hm=dd318536813af5f6b7d3c101d21fd7f573997b386189e75a40d7fda565454422&=&format=webp&quality=lossless&width=905&height=905"
          title="Software engineering"
          description="Automate your business processes."
        ></MyCard>


        <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211397360182366279/ruben_p_data_analysis_in_the_21st_century_minimalist_clean_simp_ea498bcb-ae6a-4b13-9327-289b5bb5757e.png?ex=65ee0cb5&is=65db97b5&hm=fb4d1625d60ba7223693925b408095bf01add4064807f42e5edbc16d4554f5bf&=&format=webp&quality=lossless&width=810&height=810"
          title="Data Governance"
          description="Lower costs through data quality."
        ></MyCard>
        <MyCard
          src="https://media.discordapp.net/attachments/1035214140039512137/1211396197177229342/ruben_p_data_science_in_the_21st_century_minimalist_clean_simpl_8735c8f0-7eb3-4fc1-8ed7-a7bc2470ef22.png?ex=65ee0ba0&is=65db96a0&hm=5355a8ebff7cbf4b55e7a39ae6afc50a44d7c71a2ac9bde8f52bacce0142755a&=&format=webp&quality=lossless&width=810&height=810"
          title="FAIR Data"
          description="Make your research data FAIR."
        ></MyCard>



      </div>
    </>
  );
}
