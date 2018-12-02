import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Subscribe from'./Subscribe';
import image from '../image/nature.jpg';
import Genericheader from'./Genericheader'


export default class Generic extends Component {
  render() {
  return (
    <div>
     <Genericheader />
     <section className="col-2-img">
    	<div className="image-section">
    		<img src={image} className="2-roe-img"/>
    	</div>
   		<div className="paragraph-section">
   			<h2>What is Nature?</h2>
   			<p>Nature, in the broadest sense, is equivalent to 
 			    the natural world, physical world, or material world.
   			  "Nature" refers to the phenomena of the physical world, and also to life in general. It ranges in scale from the subatomic to the cosmic.
					The term "nature" may refer to living plants and animals, 
					geological processes, weather, and physics, such as matter 
					and energy. The term is often refers to the "natural environment" or wilderness—wild animals, rocks, forest, beaches, and in general areas that have not been substantially altered by humans, or which persist despite human intervention. For, example, manufactured objects and human interaction are generally not considered part of nature, unless qualified as, for example, "human nature" or "the whole of nature". This more traditional concept of "nature" implies a distinction between natural and artificial elements of the Earth, with the artificial as that which has been brought into being by a human consciousness or a human mind.
   			</p>
   			  <p>Professor Dr. Fikret Berkes , who is a 
   			    distinguished professor at Natural Resources Institute, University of 
   			    Manitoba and his wife Doç. Dr. Mine Berkes came to Kars as guests of 
   			    uzeyDoğa Society and Doç. Dr. Çağan Şekercioğlu. Prof. Fikret 
   			    Berkes is one of the most published Turkish environmental 
   			    scientists has over 300 publications, including 9 books published
   			    in Turkey, USA, UK and Brazil. Although the Berkes couple was on 
   			    vacation in Turkey, they came to Kars to support KuzeyDoga’s 
   			    conservation efforts. On 14 May 2010, Prof. Berkes gave a talk on “The importance of involving local people in natural resource conservation” at Kafkas University as a guest of assistant professor Dr. Mehmet Ali Kırpık of Kafkas University Biology Department.
   			  </p>
   			  <p>Berkes mentioned the importance of the “Nature Conservation, Research, Restoration and Nature Tourism” project of KuzeyDoğa Society at Lake Kuyucuk where he 
 			      had visited the day before. He added that such projects 
     			  need a lot of passionate and dedicated work. He was impressed
     			  that in the short time of 3 years, Lake Kuyucuk became 
     			  Turkey’s 13th Ramsar site in 2009 and the European
     			  Destination of Excellence of 2009, while receiving the 2008 
     			  hitley Gold Award, and having Turkey’s first artificial
     			  island constructed for bird conservation. He said that 
     			  cooperation and collaboration are very important in such 
   			    projects and he applauded KuzeyDoğa Society for closely 
   			    working with the Kars Directorate of Forestry & Environment,
   			    ars Governorship, Kars Municipality, district governorships, 
   			    urrounding villages and their people. After his talk he
 			      answered questions on nature conservation and ecology for
 			      an hour. Then he thanked Kafkas University for providing 
 			      such an opportunity. Professor Dr. Fikret Berkes and Doc. 
 			      Dr. Mine Berkes went back to Istanbul on Saturday after 
 			      they conducted a workshop at Lake Kuyucuk Sustainable Nature Tourism Training organized by KuzeyDoğa Society and HasNa Foundation.
   			  </p>
   		  </div>
      </section>
      <Subscribe/>	
      <Footer/>
    </div>
  )
}
}
