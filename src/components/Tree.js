import React from 'react';
import "./Tree.css";

function Tree() {
  return (
    <div className='Tree'>
        <div class="row resume-timeline">
   		

   		<div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>Microcontroller</h3>
	   					<p>MCU</p>
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>We used STM32F407 for our robot. STM32F407 is a 32-bit microcontroller 
                            integrated circuits by STMicroelectronics.
                             It is based around the same 
                             32-bit ARM processor core Cortex-M4F.
                             Internally, each microcontroller consists 
                             of the processor core, static RAM, flash 
                             memory, debugging interface, and various 
                             peripherals. </p>
                        <img src='./images/mcu.JPG' alt=''></img> 
	   				</div>
	   			</div> 
   			</div> 
   		</div> 


           <div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>Remote control and receiver</h3>
	   					
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>Radiolink AT9S</p>
                        <img src='./images/control.JPG' alt=''></img> 
	   				</div>
	   			</div> 
   			</div> 
   		</div>


           <div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>Motor</h3>
	   					
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>A4950 Motor Driver was used in our robot. By changing the input
                            signal of Motor_PWMA and Motor_PWMB, the voltage difference 
                            of A4950's output could be controled, and the voltage across the motor 
                            could be controled. Then the ball could move to different direction with different speeds.</p>
                        <img src='./images/moter.JPG' alt=''></img> 
	   				</div>
	   			</div> 
   			</div> 
   		</div>


           <div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>JY901 Nine-axis Attitude Gyroscope</h3>
	   					
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>The JY901 module integrates high-precision gyroscopes, 
							accelerometers, and geomagnetic field 
							sensors. It uses high-performance 
							microprocessors, advanced dynamic 
							calculations and Kalman dynamic filtering 
							algorithms to quickly get real-time motion 
							infromation of the module. The gyroscope schematic
							is shown below.</p>
                        <img src='./images/jy.JPG' alt=''></img> 
	   				</div>
	   			</div> 
   			</div> 
   		</div>

           <div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>Zigbee</h3>
	   					
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>Zigbee is a standards-based wireless technology 
							developed to enable low-cost, low-power 
							wireless machine-to-machine (M2M) and 
							internet of things (IoT) networks. <br></br><br></br>
                       The ZigBee specification is divided into five layers: the physical (PHY) layer, 
					   the medium access control (MAC) layer, the network (NWK) layer, 
					   the application support (APS) layer, and the application 
					   framework (AF) layer.<br></br><br></br>
					   The physical layer is responsible for data transmission 
					   and reception. Mapping bits of information and permits them to travel
					   through the air by modulation and spreading techniques 
					   is the basic task of physical layer. Medium Access Control (MAC) Layer is responsible for
					   Beacon generation and management, data frame validation and acknowledgement, and data transfer for upper layers.
					   Network Layer is responsible for routing and establishing different Zigbee network topologies, assigning node addresses,
					   and providing secured transmission. Application Support Sub Layer (APS) is responsible for
					   filtering of packets for end devices, checking for duplicity of packets,
					   addressing definition, mapping and management, and ensuring communication between devices.
					   The Application Framework depends on the vendor who has chosen for specific applications to interact with Zigbee protocol. 
					   This represents how end points are implemented, 
					   how data requests and data confirmation is executed for that 
					   particular vendor.

	   				</p>
					   <img src='./images/zigbee.JPG' alt=''></img> 
					</div>
	   			</div> 
   			</div> 
   		</div>

		<div class="col-twelve">
   			<div class="timeline-wrap">
   				<div class="timeline-block">
	   				
	   				<div class="timeline-header">
	   					<h3>DL_LN32</h3>
	   					
	   				</div>
                    <div class="timeline-ico">
                       <i class="fa-solid fa-star"></i>
	   				</div>
	   				<div class="timeline-content">
	   					<p>The module divides the frequency between 2.4G~2.45GHz into 16 channels, each module can work on one of the channels, and modules with different channels will not interfere with each other
						   When working, the MCU tells the DL_LN32 module 
						   the address of the target and the data to be sent,
						    and the DL_LN32 module will select the optimal path 
							through the network to transmit the information to the target. 
							This module is used for communication between each robot.</p>
                         
	   				</div>
	   			</div> 
   			</div> 
   		</div>
    </div>
    </div>
  )
}

export default Tree