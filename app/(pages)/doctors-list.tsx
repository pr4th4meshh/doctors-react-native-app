import DoctorInformationCard from '@/components/ui/DoctorInformationCard';
import SearchInput from '@/components/ui/SearchInput';
import { DoctorsData } from '@/constants/Data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';

type RootStackParamList = {
    "doctors-list": {
      categoryId: string;
      categoryTitle: string;
    };
  };

const DoctorsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'doctors-list'>>();
  const { categoryId, categoryTitle } = route.params;

  const doctorsInCategory = DoctorsData.filter(doctor => doctor.id === categoryId);

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <FlatList
        data={doctorsInCategory}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => (
          <SearchInput placeholder='Search Doctors' />
        )}
        renderItem={({ item }) => (
          <DoctorInformationCard id={item.id} icon={item.avatar} title={item.name} ratings={item.ratings} price={item.price} category={item.category} />
        )}
      />
    </View>
  );
};

export default DoctorsScreen;
