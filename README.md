# TrawlerAPI
The trawler API is a temprorary REST API that can be used to utilize the trawler library over REST. It has a single command called
`csv`.

The API is hosted at: `http://gdst-trawler-api-13856.nodechef.com`

A GET against the base URL (`/`) will return "Hello World" to indicate it is up and running.

A POST against `/csv` will allow you to convert CSV into EPCIS XML. 

POST: `http://gdst-trawler-api-13856.nodechef.com/csv`

BODY:
```
{
    "businessHeaderCsv": "senderId,senderName,senderEmail,receiverId,receiverName,receiverEmail\ntest,test,test@test.com,test,test,test@test.com\n",

    "epcClassCsv": "informationProvider,id,speciesForFisheryStatisticsPurposesCode,descriptionShort,speciesForFisheryStatisticsPurposesName,tradeItemConditionCode,additionalTradeItemIdentification ,preservationTechniqueCode,grossWeight,\r\n,,,,,,,,measurement,\r\n,,,,,,,,value,unitCode\n,urn:gdst:example.org:product:class:123.123,,Wild Shrimp,PNV,,CLA,,,\n",

    "locationCsv": "informationProvider,id,name,unloadingPort,streetAddressOne,streetAddressTwo,city,state,postalCode,countryCode,latitude,longitude,contact,telephone,email,vesselID,vesselName,imoNumber,vesselFlagState,vesselOwnerName,vesselOrganizationName,fishingGearTypeCode,geofencePolygon,\r\n,,,,,,,,,,,,,,,,,,,,,,polygonPoint,\r\n,,,,,,,,,,,,,,,,,,,,,,seq,value\n,urn:gdst:example.org:location:loc:123.123,Fishing Vessel #49,,,,,CA,,US,,,,,,123,,123,US,,,,,\n",

    "objectEventCsv": "eventId,action,bizStep,informationProvider,productOwner,eventTime,eventTimeZoneOffset,disposition,epcList,readPoint,bizLocation,bizTransactionList,,transshipStartDate,transshipEndDate,landingEndDate,landingStartDate,unloadingPort,humanWelfarePolicy,extension,,,,,,,,,,,,,,,,,,,,,,,,,,,,\r\n,,,,,,,,epc,id,id,bizTransaction,,,,,,,,sourceList,,destinationList,,ilmd,,,,,,,,,,,,,,,,,,,,,,quantityList,,\r\n,,,,,,,,,,,type,value,,,,,,,source,,destination,,harvestEndDate,harvestStartDate,productionMethodCode,broodstockSource,certificationList,,,,,vesselCatchInformationList,,,,,,,,,,,,,quantityElement,,\r\n,,,,,,,,,,,,,,,,,,,type,value,type,value,,,,,certification,,,,,vesselCatchInformation,,,,,,,,,,,,,epcClass,quantity,uom\r\n,,,,,,,,,,,,,,,,,,,,,,,,,,,certificationType,certificationAgency,certificationIdentification,certificationStandard,certificationValue,catchArea,rmfoArea,economicZone,subnationalPermitArea,fishingGearTypeCode,vesselFlagState,vesselID,vesselName,gpsAvailability,vesselPublicRegistry,satelliteTrackingAuthority,fisheryImprovementProject,imoNumber,,,\n07886e03-9a60-424e-a936-8edf12c3e52d,ADD,urn:gdst:bizStep:fishingEvent,urn:gdst:example.org:party:123.123,urn:gdst:example.org:party:123.123,2021-02-21T18:52:52.337Z,+03:00,active,,,urn:gdst:example.org:location:loc:123.123,,,,,,,,, , , , ,2021-02-21T03:00:00.000Z,2021-02-21T03:00:00.000Z,,,urn:gdst:cert:fishingAuth,,,,,123,123,123,123,2,US,123,Fishing Vessel #49,,123,123,123,123,urn:gdst:example.org:product:lot:class:123.123.WILD_123,55,KGM\n,,,,,,,,,,,,,,,,,,,,,,,,,,,urn:gdst:cert:harvestCert,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,urn:gdst:cert:humanPolicy,,,,,,,,,,,,,,,,,,,,\n",

    "transformationEventCsv": "eventId,bizStep,informationProvider,productOwner,eventTime,eventTimeZoneOffset,disposition,readPoint,bizLocation,inputQuantityList,,,outputQuantityList,,,humanWelfarePolicy,ilmd,,,,,,,,,,,,,,,,,,,\r\n,,,,,,,id,id,quantityElement,,,quantityElement,,,,lotNumber,productionDate,harvestStartDate,harvestEndDate,itemExpirationDate,aquacultureMethod,proteinSource,countryOfOrigin,bestBeforeDate,preservationTechniqueCode,vesselCatchInformationList,,,,,certificationList,,,,\r\n,,,,,,,,,epcClass,quantity,uom,epcClass,quantity,uom,,,,,,,,,,,,vesselCatchInformation,,,,,certification,,,,\r\n,,,,,,,,,,,,,,,,,,,,,,,,,,vesselName,vesselID,vesselPublicRegistry,vesselFlagState,imoNumber,certificationType,certificationAgency,certificationIdentification,certificationStandard,certificationValue\n",

    "aggregationEventCsv": "eventId,action,bizStep,informationProvider,productOwner,parentID,eventTime,eventTimeZoneOffset,disposition,childEPCs,readPoint,bizLocation,extension,,,,,,,\r\n,,,,,,,,,epc,id,id,childQuantityList,,,certificationList,,,,\r\n,,,,,,,,,,,,quantityElement,,,certification,,,,\r\n,,,,,,,,,,,,epcClass,quantity,uom,certificationType,certificationAgency,certificationIdentification,certificationStandard,certificationValue\r\n,,,,,,,,,,,,,,,,,,,\n"
}
```

RESPONSE:
```
<?xml version="1.0" encoding="UTF-8"?>
<epcis:EPCISDocument xmlns:epcis="urn:epcglobal:epcis:xsd:1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader" schemaVersion="0"
	creationDate="2001-12-17T09:30:47Z"
	xsi:schemaLocation="urn:epcglobal:epcis:xsd:1  http://www.gs1si.org/BMS/epcis/1_2/EPCglobal-epcis-1_2.xsd"
	xmlns:cbvmda="urn:epcglobal:cbv:mda" xmlns:gdst="https://traceability-dialogue.org/epcis">
	<EPCISHeader>
		<sbdh:StandardBusinessDocumentHeader>
			<sbdh:HeaderVersion>1.0</sbdh:HeaderVersion>
			<sbdh:Sender>
				<sbdh:Identifier>test</sbdh:Identifier>
				<sbdh:ContactInformation>
					<sbdh:Contact>test</sbdh:Contact>
					<sbdh:EmailAddress>test@test.com</sbdh:EmailAddress>
				</sbdh:ContactInformation>
			</sbdh:Sender>
			<sbdh:Receiver>
				<sbdh:Identifier>test</sbdh:Identifier>
				<sbdh:ContactInformation>
					<sbdh:Contact>test</sbdh:Contact>
					<sbdh:EmailAddress>test@test.com</sbdh:EmailAddress>
				</sbdh:ContactInformation>
			</sbdh:Receiver>
			<sbdh:DocumentIdentification>
				<sbdh:Standard>GS1</sbdh:Standard>
				<sbdh:TypeVersion>3.0</sbdh:TypeVersion>
				<sbdh:InstanceIdentifier>9999</sbdh:InstanceIdentifier>
				<sbdh:Type>Seafood Traceability</sbdh:Type>
				<sbdh:MultipleType>false</sbdh:MultipleType>
				<sbdh:CreationDateAndTime>2021-02-21T21:35:41.455+00:00</sbdh:CreationDateAndTime>
			</sbdh:DocumentIdentification>
		</sbdh:StandardBusinessDocumentHeader>
		<extension>
			<EPCISMasterData>
				<VocabularyList>
					<Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
						<VocabularyElementList>
							<VocabularyElement id="urn:gdst:example.org:product:class:123.123">
								<attribute id="urn:epcglobal:cbv:mda#descriptionShort">Wild Shrimp</attribute>
								<attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">PNV
								</attribute>
								<attribute id="urn:epcglobal:cbv:mda#additionalTradeItemIdentification">CLA</attribute>

							</VocabularyElement>
						</VocabularyElementList>
					</Vocabulary>
					<Vocabulary type="urn:epcglobal:epcis:vtype:Location">
						<VocabularyElementList>
							<VocabularyElement id="urn:gdst:example.org:location:loc:123.123">
								<attribute id="urn:epcglobal:cbv:mda#name">Fishing Vessel #49</attribute>
								<attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
								<attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
								<attribute id="urn:epcglobal:cbv:mda#vesselID">123</attribute>
								<attribute id="urn:epcglobal:cbv:mda#imoNumber">123</attribute>
								<attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>

							</VocabularyElement>
						</VocabularyElementList>
					</Vocabulary>
				</VocabularyList>
			</EPCISMasterData>
		</extension>
	</EPCISHeader>
	<EPCISBody>
		<EventList>
			<ObjectEvent>
				<eventTime>2021-02-21T18:52:52.337Z</eventTime>
				<eventTimeZoneOffset>+03:00</eventTimeZoneOffset>
				<baseExtension>
					<eventID>07886e03-9a60-424e-a936-8edf12c3e52d</eventID>
				</baseExtension>
				<action>ADD</action>
				<bizStep>urn:gdst:bizStep:fishingEvent</bizStep>
				<disposition>urn:epcglobal:cbv:disp:active</disposition>
				<readPoint>
					<id></id>
				</readPoint>
				<bizLocation>
					<id>urn:gdst:example.org:location:loc:123.123</id>
				</bizLocation>
				<extension>
					<quantityList>
						<quantityElement>
							<epcClass>urn:gdst:example.org:product:lot:class:123.123.WILD_123</epcClass>
							<quantity>55</quantity>
							<uom>KGM</uom>
						</quantityElement>
					</quantityList>
					<sourceList>
						<source type="urn:epcglobal:cbv:sdt: ">
						</source>
					</sourceList>
					<destinationList>
						<destination type="urn:epcglobal:cbv:sdt: ">

						</destination>
					</destinationList>
					<ilmd>
						<cbvmda:vesselCatchInformationList>
							<cbvmda:vesselCatchInformation>
								<cbvmda:vesselName>Fishing Vessel #49</cbvmda:vesselName>
								<cbvmda:vesselID>123</cbvmda:vesselID>
								<gdst:imoNumber>123</gdst:imoNumber>
								<cbvmda:vesselFlagState>US</cbvmda:vesselFlagState>
								<gdst:vesselPublicRegistry>123</gdst:vesselPublicRegistry>
								<gdst:gpsAvailability></gdst:gpsAvailability>
								<gdst:satelliteTrackingAuthority>123</gdst:satelliteTrackingAuthority>
								<cbvmda:economicZone>123</cbvmda:economicZone>
								<gdst:fisheryImprovementProject>123</gdst:fisheryImprovementProject>
								<gdst:rmfoArea>123</gdst:rmfoArea>
								<gdst:subnationalPermitArea>123</gdst:subnationalPermitArea>
								<cbvmda:catchArea>123</cbvmda:catchArea>
								<cbvmda:fishingGearTypeCode>2</cbvmda:fishingGearTypeCode>
							</cbvmda:vesselCatchInformation>
						</cbvmda:vesselCatchInformationList>
						<cbvmda:harvestEndDate>2021-02-21T03:00:00.000Z</cbvmda:harvestEndDate>
						<cbvmda:harvestStartDate>2021-02-21T03:00:00.000Z</cbvmda:harvestStartDate>
						<cbvmda:certificationList>
							<cbvmda:certification>
								<gdst:certificateType>urn:gdst:cert:fishingAuth</gdst:certificateType>
								<cbvmda:certificationStandard></cbvmda:certificationStandard>
								<cbvmda:certificationAgency></cbvmda:certificationAgency>
								<cbvmda:certificationValue></cbvmda:certificationValue>
								<cbvmda:certificationIdentification></cbvmda:certificationIdentification>
							</cbvmda:certification>
							<cbvmda:certification>
								<gdst:certificateType>urn:gdst:cert:harvestCert</gdst:certificateType>
								<cbvmda:certificationStandard></cbvmda:certificationStandard>
								<cbvmda:certificationAgency></cbvmda:certificationAgency>
								<cbvmda:certificationValue></cbvmda:certificationValue>
								<cbvmda:certificationIdentification></cbvmda:certificationIdentification>
							</cbvmda:certification>
							<cbvmda:certification>
								<gdst:certificateType>urn:gdst:cert:humanPolicy</gdst:certificateType>
								<cbvmda:certificationStandard></cbvmda:certificationStandard>
								<cbvmda:certificationAgency></cbvmda:certificationAgency>
								<cbvmda:certificationValue></cbvmda:certificationValue>
								<cbvmda:certificationIdentification></cbvmda:certificationIdentification>
							</cbvmda:certification>
						</cbvmda:certificationList>
					</ilmd>
				</extension>
				<gdst:productOwner>urn:gdst:example.org:party:123.123</gdst:productOwner>
				<cbvmda:informationProvider>urn:gdst:example.org:party:123.123</cbvmda:informationProvider>
			</ObjectEvent>
		</EventList>
	</EPCISBody>
</epcis:EPCISDocument>
```
