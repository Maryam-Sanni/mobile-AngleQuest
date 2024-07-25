import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import EmploymentHistoryModal from '../components/EditEmplyHistory';
import SkillsEditModal from '../components/SkillsEditModal';
import CertificationsEditModal from '../components/CertificationsEditModal';
import OtherExperiencesEditModal from '../components/OtherExperiencesEditModal';
import PreferredLocationsEditModal from '../components/PreferredLocationsEditModal';
import PreferredRolesEditModal from '../components/PreferredRolesEditModal';

const Profile = () => {
  const initialHistory = [
    {
      id: 1,
      position: 'Senior Architectural Engineer',
      company: 'KIX Architecture Firm',
      duration: 'May 2020 - Present',
      description: `- Lead the design and development of high-profile commercial projects, overseeing a team of engineers and architects.
- Implemented innovative sustainable design strategies, resulting in LEED Platinum certification for several projects.
- Collaborated closely with clients to understand their needs and objectives, delivering tailored solutions within budget and timeline constraints.
- Conducted technical reviews and provided mentorship to junior staff members to foster professional growth and development.`,
    },
    {
      id: 2,
      position: 'Architectural Engineer',
      company: 'Phoenix Engineering Consultants',
      duration: 'July 2015 - Jan 2020',
      description: `- Designed and managed the construction of various residential and mixed-use developments, ensuring compliance with building codes and regulations.
- Utilized advanced software tools such as Revit and AutoCAD to create detailed architectural drawings and 3D models.
- Conducted site visits and inspections to monitor construction progress and address any design or engineering challenges.
- Coordinated with contractors, subcontractors, and vendors to procure materials and equipment, optimizing project efficiency and cost-effectiveness.`,
    },
    {
      id: 3,
      position: 'Junior Architectural Engineer',
      company: 'Zenith Design & Construction',
      duration: 'Sept 2012 - Feb 2015',
      description: `- Assisted senior engineers in the design and analysis of structural systems for commercial and institutional buildings.
- Conducted feasibility studies and prepared design proposals, contributing to the successful acquisition of new projects.
- Participated in interdisciplinary project meetings, communicating effectively with architects, MEP engineers, and other stakeholders.
- Developed proficiency in building information modeling (BIM) software and contributed to the integration of BIM workflows within the firm.`,
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentHistory, setCurrentHistory] = useState(null);
  const [employmentHistories, setEmploymentHistories] = useState(initialHistory);

  const handleOpenPress = (history) => {
    setCurrentHistory(history);
    setModalVisible(true);
  };

  const handleSave = (updatedHistory) => {
    const updatedHistories = employmentHistories.map((history) =>
      history.id === updatedHistory.id ? updatedHistory : history
    );
    setEmploymentHistories(updatedHistories);
  };

  const [skills, setSkills] = useState([
    'Building Information Modeling',
    'Structural Analysis Software',
    'Construction Documentation',
    'Cost Estimation',
    'AutoCAD'
  ]);

  const [skillsmodalVisible, setskillsModalVisible] = useState(false);

  const handleOpenSkills = () => {
    setskillsModalVisible(true);
  };

  const handleCloseModal = () => {
    setskillsModalVisible(false);
  };

  const handleSaveSkills = (newSkills) => {
    setSkills(newSkills);
  };

  const [preferredLocations, setPreferredLocations] = useState([
    'United States',
    'Germany',
    'Canada',
    'UAE',
    'Nigeria',
  ]);

  const [preferredLocationsModalVisible, setPreferredLocationsModalVisible] = useState(false);

  const handleOpenPreferredLocations = () => {
    setPreferredLocationsModalVisible(true);
  };

  const handleClosePreferredLocationsModal = () => {
    setPreferredLocationsModalVisible(false);
  };

  const handleSavePreferredLocations = (newPreferredLocations) => {
    setPreferredLocations(newPreferredLocations);
  };

  const [certifications, setCertifications] = useState([
    'Licensed Professional Engineer (PE) - [London/United Kingdom]',
    'LEED Accredited Professional (LEED AP)',
    'Revit Architecture Certified Professional',
    'Autodesk Certified Professional (AutoCAD)',
    'Certified Passive House Designer (CPHD)',
    'Building Performance Institute (BPI) Certification',
    'Certified Construction Specifier (CCS)',
    'Certified Energy Manager (CEM)'
  ]);

  const [certificationsmodalVisible, setcertificationsModalVisible] = useState(false);

  const handleOpenCertifications = () => {
    setcertificationsModalVisible(true);
  };

  const handleClosecertificationsModal = () => {
    setcertificationsModalVisible(false);
  };

  const handleSaveCertifications = (newCertifications) => {
    setCertifications(newCertifications);
  };

  const [otherExperiences, setOtherExperiences] = useState([
    'Technical Writing',
    'Research and Development',
    'Quality Assurance/Quality Control (QA/QC)',
    'Client Relationship Management',
    'Construction Administration',
    'Feasibility Studies',
    'Risk Management'
  ]);
  const [otherExperiencesModalVisible, setOtherExperiencesModalVisible] = useState(false);

  const handleOpenOtherExperiences = () => {
    setOtherExperiencesModalVisible(true);
  };

  const handleCloseOtherExperiencesModal = () => {
    setOtherExperiencesModalVisible(false);
  };

  const handleSaveOtherExperiences = (newOtherExperiences) => {
    setOtherExperiences(newOtherExperiences);
  };

  const [preferredRoles, setPreferredRoles] = useState([
    'Java Programming',
    'Microsoft Azure',
    'SAP',
  ]);

  const [preferredRolesModalVisible, setPreferredRolesModalVisible] = useState(false);

  const handleOpenPreferredRoles = () => {
    setPreferredRolesModalVisible(true);
  };

  const handleClosePreferredRolesModal = () => {
    setPreferredRolesModalVisible(false);
  };

  const handleSavePreferredRoles = (newPreferredRoles) => {
    setPreferredRoles(newPreferredRoles);
  };

  return (
    <ImageBackground
      source={require('../assets/Background.png')}
      style={{ height: '110%', width: '100%', flex: 1 }}
    >
      <BlurView intensity={70} style={styles.blurBackground}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
          <View style={styles.glassBox}>
            <View style={styles.pagecontainer}>
              <View style={{ padding: 20 }}>
                <View style={{ flex: 1 }}>
                  {/* Profile Card */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}>
                    <View style={{ flex: 1, alignSelf: "flex-start" }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image
                          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/42eb8a1c745d5f4771d12d615bda303b93fe9d7cb8d0941022cdd47c4212a79e?apiKey=7b9918e68d9b487793009b3aea5b1a32&width=200' }}
                          style={{ width: 79, height: 79, borderRadius: 79, marginRight: 20 }}
                          resizeMode="cover"
                        />
                        <View style={{ marginRight: 10 }}>
                          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>John Smith</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image
                              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/00e648efb83f97ef0794d800368a6ad24636e8f2ce415b2e1c45f6156d62607e?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                              style={{ width: 20, height: 20 }}
                              resizeMode="contain"
                            />
                            <Text style={{ marginLeft: 5, fontSize: 12 }}>Architectural Engineer</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image
                              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2e401f387b03ad630b9a1b153a09a7d8ae485b991cd808923eaf68585e3117e3?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
                              style={{ width: 20, height: 20 }}
                              resizeMode="contain"
                            />
                            <Text style={{ marginLeft: 5, fontSize: 12 }}>Senior Level</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                   
                  </View>
                  <Text style={styles.sectionTitle}>About</Text>
                  <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 10,
 }}>
                John Smith is a passionate architectural engineer with over 10 years of
                experience in designing and implementing innovative building solutions.
                With a Bachelor's degree in Architectural Engineering from XYZ University
                and a Master's degree in Sustainable Design, John brings a unique blend of
                technical expertise and environmental consciousness to his projects.
              </Text>
              <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 10, }}>
                Throughout his career, John has worked on a diverse range of projects,
                including residential, commercial, and institutional buildings. His
                portfolio showcases his ability to seamlessly integrate cutting-edge
                technology with elegant design principles, resulting in spaces that are
                both functional and aesthetically pleasing.
              </Text>
              <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 10, }}>
                John is committed to sustainability and strives to incorporate
                energy-efficient solutions and #206C00 building practices into every project
                he undertakes. He is well-versed in LEED certification requirements and
                actively seeks out opportunities to minimize environmental impact while
                maximizing efficiency and comfort for building occupants.
              </Text>
              <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 10,
 }}>
                In addition to his technical skills, John is a collaborative team player
                who excels at communication and project management. He thrives in dynamic
                environments and is adept at coordinating with architects, contractors,
                and other stakeholders to ensure successful project delivery.
              </Text>
              <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 10,
 }}>
                Outside of work, John enjoys hiking, photography, and volunteering his
                time to support local community initiatives focused on sustainability and
                environmental conservation.
              </Text>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginTop: 10 }} />
            
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Employment History</Text>
                    {employmentHistories.map((history) => (
                      <TouchableOpacity
                        key={history.id}
                        style={styles.employmentHistoryContainer}
                        onPress={() => handleOpenPress(history)}
                      >
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.employmentHistoryPosition}>{history.position}</Text>
                        <TouchableOpacity onPress={() => handleOpenPress(history)}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>
                        <Text style={styles.employmentHistoryCompany}>{history.company}</Text>
                        <Text style={styles.employmentHistoryDuration}>{history.duration}</Text>
                        <Text style={styles.employmentHistoryDescription}>{history.description}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View style={styles.sectionContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <TouchableOpacity onPress={handleOpenSkills}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>
                      {skills.map((skill, index) => (
                        <Text key={index} style={styles.skillItem}>{skill}</Text>
                      ))}
                  </View>
                  <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginTop: 10 }} />
                  <View style={styles.sectionContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.sectionTitle}>Certifications</Text>
                    <TouchableOpacity onPress={handleOpenCertifications}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>   
                      {certifications.map((certification, index) => (
                        <Text key={index} style={styles.certificationItem}>{certification}</Text>
                      ))}
                  </View>

                  <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginTop: 10 }} />

                  <View style={styles.sectionContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.sectionTitle}>Other Experiences</Text>
                    <TouchableOpacity onPress={handleOpenOtherExperiences}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>   
                      {otherExperiences.map((experience, index) => (
                        <Text key={index} style={styles.otherExperienceItem}>{experience}</Text>
                      ))}
                  </View>

                  <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginTop: 10 }} />
                  <View style={styles.sectionContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.sectionTitle}>Preferred Locations</Text>
                    <TouchableOpacity onPress={handleOpenPreferredLocations}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>   
                      {preferredLocations.map((location, index) => (
                        <Text key={index} style={styles.preferredLocationItem}>{location}</Text>
                      ))}
                  </View>

                  <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCC', marginTop: 10 }} />
                  <View style={styles.sectionContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.sectionTitle}>Preferred Roles</Text>
                    <TouchableOpacity onPress={handleOpenPreferredRoles}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6326875147d814303309b6b133e12c983f42b31e7c4e6b223f7fbc169c262b88?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
        style={{ width: 20, height: 20 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
    </View>  
                      {preferredRoles.map((role, index) => (
                        <Text key={index} style={styles.preferredRoleItem}>{role}</Text>
                      ))}
                  </View>

                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </BlurView>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <EmploymentHistoryModal
          history={currentHistory}
          onSave={handleSave}
          onClose={() => setModalVisible(false)}
        />
      </Modal>

      <Modal
        visible={skillsmodalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <SkillsEditModal
          skills={skills}
          onSave={handleSaveSkills}
          onClose={handleCloseModal}
        />
      </Modal>

      <Modal
        visible={certificationsmodalVisible}
        animationType="slide"
        onRequestClose={handleClosecertificationsModal}
      >
        <CertificationsEditModal
          certifications={certifications}
          onSave={handleSaveCertifications}
          onClose={handleClosecertificationsModal}
        />
      </Modal>

      <Modal
        visible={otherExperiencesModalVisible}
        animationType="slide"
        onRequestClose={handleCloseOtherExperiencesModal}
      >
        <OtherExperiencesEditModal
          otherExperiences={otherExperiences}
          onSave={handleSaveOtherExperiences}
          onClose={handleCloseOtherExperiencesModal}
        />
      </Modal>

      <Modal
        visible={preferredLocationsModalVisible}
        animationType="slide"
        onRequestClose={handleClosePreferredLocationsModal}
      >
        <PreferredLocationsEditModal
          preferredLocations={preferredLocations}
          onSave={handleSavePreferredLocations}
          onClose={handleClosePreferredLocationsModal}
        />
      </Modal>

      <Modal
        visible={preferredRolesModalVisible}
        animationType="slide"
        onRequestClose={handleClosePreferredRolesModal}
      >
        <PreferredRolesEditModal
          preferredRoles={preferredRoles}
          onSave={handleSavePreferredRoles}
          onClose={handleClosePreferredRolesModal}
        />
      </Modal>
    </ImageBackground>
  );
};

const styles = {
  blurBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagecontainer: {
    backgroundColor: '#f7fff4',
    borderRadius: 10,
    padding: 10, 
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 2, 
    borderColor: 'rgba(225,225,212,0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 glassBox: {
  backgroundColor: 'rgba(225,255,212,0.3)',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#206C00',
    marginTop: 10
  },
  employmentHistoryContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  employmentHistoryPosition: {
    fontSize: 16,
    fontWeight: 'bold',
   color: 'darkgreen'
  },
  employmentHistoryCompany: {
    fontSize: 14,
  },
  employmentHistoryDuration: {
    fontSize: 12,
    color: '#888',
  },
  employmentHistoryDescription: {
    fontSize: 12,
    color: '#555',
  },
  skillItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  certificationItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  otherExperienceItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  preferredLocationItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  preferredRoleItem: {
    fontSize: 14,
    marginBottom: 5,
  },
};

export default Profile;
