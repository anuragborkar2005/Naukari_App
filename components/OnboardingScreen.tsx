import { useState } from 'react';
import { Text, View, Pressable, Image, TextInput } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  const renderCurrentStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <View className="flex flex-row justify-center gap-x-4">
              <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <Rect
                  x="7.9196"
                  y="24.748"
                  width="23.8"
                  height="23.8"
                  transform="rotate(-45 7.9196 24.748)"
                  stroke="#FEFEFE"
                  strokeWidth="11.2"
                />
              </Svg>

              <Text className="text-4xl font-semibold  text-white">Naukari</Text>
            </View>
            <View className="absolute left-1/2 right-0 -z-50 h-[80rem] w-[80rem] rotate-45 bg-emerald-500" />
            <View className="absolute left-2/3 right-0 -z-10 h-[40rem] w-[40rem] rotate-45  bg-emerald-600" />
            <View className="absolute bottom-36 flex items-center px-6">
              <Text className="text-center text-4xl font-bold text-white">
                Find your dream{'\n'}job now
              </Text>
              <Text className="mt-8 text-center text-xl  text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id neque justo.
              </Text>
            </View>
          </>
        );
      case 1:
        return (
          <View className="flex max-w-md flex-col  space-y-4 p-2">
            <Text className="text-4xl font-semibold text-white">Continue as</Text>
            <Text className="mt-2 text-xl font-medium text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
            <View className="mt-4 flex flex-col items-center gap-4">
              <Pressable
                onPress={() => setStep(step - 1)}
                className="flex h-36 w-[24rem] max-w-md flex-row items-center rounded-xl bg-white p-4">
                {/* Icon container */}
                <View className="flex h-36 w-36 items-center justify-center rounded-full">
                  {/* SVG icon */}
                  <Svg width="80" height="80" viewBox="0 0 60 60" fill="none">
                    <G clipPath="url(#clip0_26_1903)">
                      <Path
                        d="M22.0817 43.0547L26.5773 52.582L22.0817 60.0002H11.1719C11.1719 46.0308 20.4509 43.0547 20.4509 43.0547H22.0817Z"
                        fill="#FFA875"
                      />
                      <Path
                        d="M48.829 60.0002H37.9204L34.7539 53.1838L37.9204 43.0547H39.6397C39.6397 43.0547 48.829 46.0308 48.829 60.0002Z"
                        fill="#FFA875"
                      />
                      <Path d="M22.082 43.0547H37.9208V60.0002H22.082V43.0547Z" fill="#81DDFD" />
                      <Path
                        d="M5.10156 24.8992C5.10156 11.1697 16.2713 0 30.0007 0C43.7301 0 54.8999 11.1697 54.8999 24.8992H5.10156Z"
                        fill="#827F98"
                      />
                      <Path
                        d="M9.44734 24.8984H5.09982C5.09982 27.613 4.6005 29.7691 4.06727 31.2974C3.36151 33.3205 4.1362 35.5649 5.94887 36.7076C8.00565 38.0041 11.113 39.2743 15.3939 39.2743L9.44734 24.8984Z"
                        fill="#77718C"
                      />
                      <Path
                        d="M50.552 24.8984H54.8995C54.8995 27.613 55.3988 29.7691 55.9321 31.2974C56.6378 33.3205 55.8631 35.5649 54.0505 36.7076C51.9937 38.0041 48.8864 39.2743 44.6055 39.2743L50.552 24.8984Z"
                        fill="#827F98"
                      />
                      <Path
                        d="M14.1884 23.885C14.1884 14.1688 18.9506 5.56582 26.2671 0.279297C14.3024 2.08618 5.10156 12.4378 5.10156 24.8984H14.2078C14.1963 24.5618 14.1884 24.2244 14.1884 23.885Z"
                        fill="#77718C"
                      />
                      <Path
                        d="M50.7975 30.015C53.486 30.015 55.6654 27.8356 55.6654 25.1471C55.6654 22.4587 53.486 20.2793 50.7975 20.2793C48.1091 20.2793 45.9297 22.4587 45.9297 25.1471C45.9297 27.8356 48.1091 30.015 50.7975 30.015Z"
                        fill="#FFCABD"
                      />
                      <Path
                        d="M22.082 43.0547V46.4569C22.082 48.6437 23.8547 50.4164 26.0414 50.4164C28.2282 50.4164 30.0008 48.6436 30.0008 46.4569V43.0547H22.082Z"
                        fill="white"
                      />
                      <Path
                        d="M37.9188 43.0547V46.4569C37.9188 48.6437 36.1461 50.4164 33.9594 50.4164C31.7726 50.4164 30 48.6436 30 46.4569V43.0547H37.9188Z"
                        fill="white"
                      />
                      <Path
                        d="M22.3621 43.6484L22.0819 43.0547H20.4509C20.4509 43.0547 11.1719 46.0309 11.1719 60.0002H13.1583C13.8351 53.3323 17.2972 47.4887 22.3621 43.6484Z"
                        fill="#FF995D"
                      />
                      <Path
                        d="M50.097 20.5799C49.6841 18.6518 47.8759 17.3568 45.9188 17.5976C32.7671 19.2161 24.199 14.5838 19.6859 10.9718C18.1055 9.70698 15.8016 9.90509 14.4747 11.4337C11.3442 15.0401 9.44922 19.7478 9.44922 24.8982C9.44922 36.238 18.9041 45.5795 30.2431 45.4485C41.4819 45.3186 50.5524 36.1677 50.5524 24.8983C50.5524 23.4169 50.3952 21.9723 50.097 20.5799Z"
                        fill="#FFDCCE"
                      />
                      <Path
                        d="M22.1127 43.8467C17.1998 38.6357 14.1875 31.6129 14.1875 23.8859C14.1875 18.92 15.4324 14.2456 17.6252 10.1551C16.4688 10.0612 15.2876 10.4972 14.4738 11.4348C12.296 13.9437 10.7171 16.9858 9.95718 20.3389C9.7103 20.3004 9.4575 20.28 9.19988 20.28C6.51147 20.28 4.33203 22.4594 4.33203 25.1478C4.33203 27.8363 6.51147 30.0157 9.19988 30.0157C9.50229 30.0157 9.79771 29.9867 10.0848 29.934C11.6967 36.2009 16.2344 41.3599 22.1127 43.8467Z"
                        fill="#FFCABD"
                      />
                      <Path
                        d="M17.8328 32.6107C20.312 32.6107 22.3218 31.0102 22.3218 29.0358C22.3218 27.0615 20.312 25.4609 17.8328 25.4609C15.3535 25.4609 13.3438 27.0615 13.3438 29.0358C13.3438 31.0102 15.3535 32.6107 17.8328 32.6107Z"
                        fill="#FFA0AB"
                      />
                      <Path
                        d="M42.1648 32.6107C44.644 32.6107 46.6538 31.0102 46.6538 29.0358C46.6538 27.0615 44.644 25.4609 42.1648 25.4609C39.6856 25.4609 37.6758 27.0615 37.6758 29.0358C37.6758 31.0102 39.6856 32.6107 42.1648 32.6107Z"
                        fill="#FFA0AB"
                      />
                      <Path
                        d="M20.4484 26.4995C19.9484 26.4995 19.543 26.0941 19.543 25.5941V23.7589C19.543 23.2589 19.9484 22.8535 20.4484 22.8535C20.9484 22.8535 21.3538 23.2589 21.3538 23.7589V25.5941C21.3538 26.0941 20.9484 26.4995 20.4484 26.4995Z"
                        fill="#423E4F"
                      />
                      <Path
                        d="M39.55 26.4995C39.0498 26.4995 38.6445 26.0941 38.6445 25.5941V23.7589C38.6445 23.2589 39.0498 22.8535 39.55 22.8535C40.0501 22.8535 40.4554 23.2589 40.4554 23.7589V25.5941C40.4554 26.0941 40.0501 26.4995 39.55 26.4995Z"
                        fill="#423E4F"
                      />
                      <Path
                        d="M29.9975 27.5928C28.7708 27.5928 27.6042 27.0615 26.7971 26.1352C26.4685 25.7582 26.5078 25.1863 26.885 24.8577C27.2619 24.5292 27.8339 24.5684 28.1623 24.9455C28.6256 25.477 29.2944 25.7818 29.9975 25.7818C30.7005 25.7818 31.3693 25.4769 31.8326 24.9453C32.1613 24.5683 32.7331 24.5291 33.1101 24.8577C33.4871 25.1862 33.5264 25.7582 33.1979 26.1352C32.3905 27.0615 31.224 27.5928 29.9975 27.5928Z"
                        fill="#423E4F"
                      />
                      <Path
                        d="M15.7305 59.9999V54.089C15.7305 53.589 16.1359 53.1836 16.6359 53.1836C17.1359 53.1836 17.5413 53.589 17.5413 54.089V59.9999H15.7305Z"
                        fill="#FF995D"
                      />
                      <Path
                        d="M42.457 59.9999V54.089C42.457 53.589 42.8623 53.1836 43.3625 53.1836C43.8626 53.1836 44.2679 53.589 44.2679 54.089V59.9999H42.457Z"
                        fill="#FF995D"
                      />
                      <Path
                        d="M29.9973 53.8149C30.4812 53.8149 30.8735 53.4226 30.8735 52.9387C30.8735 52.4548 30.4812 52.0625 29.9973 52.0625C29.5134 52.0625 29.1211 52.4548 29.1211 52.9387C29.1211 53.4226 29.5134 53.8149 29.9973 53.8149Z"
                        fill="white"
                      />
                      <Path
                        d="M29.9973 57.4419C30.4812 57.4419 30.8735 57.0496 30.8735 56.5657C30.8735 56.0817 30.4812 55.6895 29.9973 55.6895C29.5134 55.6895 29.1211 56.0817 29.1211 56.5657C29.1211 57.0496 29.5134 57.4419 29.9973 57.4419Z"
                        fill="white"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_26_1903">
                        <Rect width="60" height="60" rx="8" fill="white" />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </View>

                <View className="ml-4 flex w-[200px] flex-col justify-center space-y-1">
                  <Text className="text-2xl font-semibold text-emerald-500">JOB SEEKERS</Text>
                  <Text
                    className="text-md text-gray-600"
                    style={{ flexWrap: 'wrap' }}
                    numberOfLines={0}>
                    Finding a job here has never been easier than before
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => setStep(step - 1)}
                className="flex h-36 w-[24rem] max-w-md flex-row items-center rounded-xl bg-white p-4">
                <View className="flex h-36 w-36 items-center justify-center rounded-full ">
                  <Svg width="80" height="80" viewBox="0 0 60 60" fill="none">
                    <Path
                      d="M47.1691 52.9299L37.1249 54.8591L34.5078 45.8573L37.1249 36.8555H39.1603C39.1603 36.8555 47.1691 40.2249 47.1691 52.9299Z"
                      fill="#77718C"
                    />
                    <Path
                      d="M22.8763 36.8555L25.4934 45.8573L22.8763 54.8591L12.832 52.9299C12.832 40.2249 20.8409 36.8555 20.8409 36.8555H22.8763Z"
                      fill="#77718C"
                    />
                    <Path
                      d="M37.1229 36.8555V54.8591L29.9989 56.414L22.875 54.8591V36.8555H37.1229Z"
                      fill="#EAEAEA"
                    />
                    <Path
                      d="M25.4922 55.4309L27.6493 42.0625H32.3488L34.5059 55.4309H25.4922Z"
                      fill="#FC5C70"
                    />
                    <Path
                      d="M27.1289 38.0625V41.9215C27.1289 43.5075 28.4146 44.7934 30.0008 44.7934C31.587 44.7934 32.8727 43.5077 32.8727 41.9215V38.0625H27.1289Z"
                      fill="#FF6F7F"
                    />
                    <Path
                      d="M7.19531 22.8036C7.19531 10.2297 17.425 0 29.9989 0C42.5729 0 52.8027 10.2297 52.8027 22.8036H7.19531Z"
                      fill="#77718C"
                    />
                    <Path
                      d="M15.2784 22.0143C15.2784 11.6364 22.1822 2.87227 31.6471 0.06C31.1026 0.0208853 30.5532 0 29.9989 0C17.425 0 7.19531 10.2297 7.19531 22.8036H15.2935C15.2846 22.5415 15.2784 22.2787 15.2784 22.0143Z"
                      fill="#6A647F"
                    />
                    <Path
                      d="M48.6974 27.7035C51.4039 27.7035 53.598 25.5094 53.598 22.8029C53.598 20.0964 51.4039 17.9023 48.6974 17.9023C45.9909 17.9023 43.7969 20.0964 43.7969 22.8029C43.7969 25.5094 45.9909 27.7035 48.6974 27.7035Z"
                      fill="#FFBD86"
                    />
                    <Path
                      d="M42.616 9.16707C41.2171 7.87254 39.23 7.45049 37.4009 7.98674C35.2006 8.63177 32.6796 8.99805 30.0003 8.99805C27.3209 8.99805 24.7999 8.63165 22.5996 7.98674C20.7705 7.45061 18.7835 7.87254 17.3846 9.16707C13.7178 12.5605 11.4219 17.4137 11.4219 22.8038C11.4219 33.0643 19.7397 40.1749 30.0001 40.1749C40.2606 40.1749 48.5784 33.0643 48.5784 22.8038C48.5785 17.4137 46.2827 12.5605 42.616 9.16707Z"
                      fill="#FED2A4"
                    />
                    <Path
                      d="M44.2442 21.167C44.2442 24.1833 41.7908 26.6381 38.7745 26.6381C35.7582 26.6381 33.3047 24.1833 33.3047 21.167C33.3047 18.1507 35.7582 15.6973 38.7745 15.6973C41.7908 15.6974 44.2442 18.1507 44.2442 21.167Z"
                      fill="#FFD7B6"
                    />
                    <Path
                      d="M27.0021 21.1663C27.0021 24.3514 24.4113 26.9435 21.2264 26.9435C18.0414 26.9435 15.4492 24.3514 15.4492 21.1663C15.4492 17.9813 18.0413 15.3906 21.2264 15.3906C24.4114 15.3906 27.0021 17.9813 27.0021 21.1663Z"
                      fill="#FFD7B6"
                    />
                    <Path
                      d="M21.3586 19.7012C20.8585 19.7012 20.4531 20.1066 20.4531 20.6066V22.2669C20.4531 22.767 20.8585 23.1724 21.3586 23.1724C21.8586 23.1724 22.264 22.767 22.264 22.2669V20.6066C22.264 20.1066 21.8586 19.7012 21.3586 19.7012Z"
                      fill="#423E4F"
                    />
                    <Path
                      d="M38.6398 19.7012C38.1396 19.7012 37.7344 20.1066 37.7344 20.6066V22.2669C37.7344 22.767 38.1396 23.1724 38.6398 23.1724C39.14 23.1724 39.5452 22.767 39.5452 22.2669V20.6066C39.5452 20.1066 39.1398 19.7012 38.6398 19.7012Z"
                      fill="#423E4F"
                    />
                    <Path
                      d="M32.5812 25.0569C32.204 24.7282 31.6321 24.7676 31.3037 25.1446C30.9743 25.5227 30.4986 25.7396 29.9987 25.7396C29.4988 25.7396 29.0231 25.5227 28.6936 25.1446C28.365 24.7676 27.7932 24.7284 27.4161 25.0569C27.039 25.3853 26.9998 25.9572 27.3283 26.3342C28.0018 27.1071 28.9751 27.5504 29.9986 27.5504C31.0221 27.5504 31.9953 27.1072 32.6688 26.3342C32.9975 25.9573 32.9581 25.3853 32.5812 25.0569Z"
                      fill="#423E4F"
                    />
                    <Path
                      d="M22.675 38.8671C18.1277 34.6818 15.2776 28.6809 15.2776 22.0135C15.2776 16.6526 17.1202 11.7224 20.2058 7.82031C19.1659 7.97593 18.1788 8.429 17.3824 9.16603C14.8537 11.5061 12.9774 14.5408 12.0561 17.9666C11.82 17.9248 11.5685 17.9021 11.299 17.9021C8.59248 17.9021 6.39844 20.0962 6.39844 22.8028C6.39844 25.5093 8.59248 27.7034 11.299 27.7034C11.5775 27.7034 11.8368 27.6789 12.0797 27.6343C13.5814 32.9196 17.5281 36.9224 22.675 38.8671Z"
                      fill="#FFBD86"
                    />
                    <Path
                      d="M38.775 14.3574C35.3875 14.3574 32.571 16.8443 32.0519 20.087C31.4048 19.8226 30.707 19.6826 29.9996 19.6826C29.2909 19.6826 28.5931 19.8226 27.9461 20.087C27.4269 16.8443 24.6104 14.3574 21.2241 14.3574C17.4696 14.3574 14.4141 17.4117 14.4141 21.1663C14.4141 24.9208 17.4696 27.9763 21.2241 27.9763C24.6539 27.9763 27.4982 25.4254 27.9642 22.1212C28.5617 21.7144 29.2716 21.4934 29.9996 21.4934C30.7263 21.4934 31.4374 21.7144 32.0338 22.1212C32.4998 25.4254 35.344 27.9763 38.775 27.9763C42.5295 27.9763 45.5839 24.9208 45.5839 21.1663C45.5839 17.4117 42.5295 14.3574 38.775 14.3574ZM21.2241 26.1655C18.468 26.1655 16.2249 23.9224 16.2249 21.1663C16.2249 18.4101 18.468 16.1683 21.2241 16.1683C23.9803 16.1683 26.2221 18.4101 26.2221 21.1663C26.2221 23.9224 23.9803 26.1655 21.2241 26.1655ZM38.775 26.1655C36.0189 26.1655 33.777 23.9224 33.777 21.1663C33.777 18.4101 36.0189 16.1683 38.775 16.1683C41.5312 16.1683 43.773 18.4101 43.773 21.1663C43.773 23.9224 41.5312 26.1655 38.775 26.1655Z"
                      fill="#423E4F"
                    />
                    <Path
                      d="M39.1773 46.1055C36.7689 46.1055 34.8164 48.0579 34.8164 50.4664C34.8164 51.8266 35.9191 52.9293 37.2793 52.9293L39.1773 54.674L41.0754 52.9293C42.4356 52.9293 43.5383 51.8266 43.5383 50.4664C43.5383 48.0579 41.5858 46.1055 39.1773 46.1055Z"
                      fill="#FED2A4"
                    />
                    <Path
                      d="M20.8219 46.1055C23.2303 46.1055 25.1828 48.0579 25.1828 50.4664C25.1828 51.8266 24.0801 52.9293 22.7199 52.9293L20.8219 54.674L18.9238 52.9293C17.5636 52.9293 16.4609 51.8266 16.4609 50.4664C16.4609 48.0579 18.4134 46.1055 20.8219 46.1055Z"
                      fill="#FED2A4"
                    />
                    <Path
                      d="M56.9401 52.9297H3.05988C1.36998 52.9297 0 54.2997 0 55.9896V57.9074C0 59.0068 0.891308 59.8982 1.99074 59.8982H58.0093C59.1087 59.8982 60 59.0068 60 57.9074V55.9896C60 54.2997 58.63 52.9297 56.9401 52.9297Z"
                      fill="#E8A882"
                    />
                    <Path
                      d="M9.60495 52.9297H3.05988C1.36998 52.9297 0 54.2997 0 55.9896V57.9074C0 59.0068 0.891308 59.8982 1.99074 59.8982H12.7825C11.1962 57.9114 10.0805 55.5325 9.60495 52.9297Z"
                      fill="#E3986D"
                    />
                  </Svg>
                </View>

                <View className="ml-4 flex w-[200px] flex-col justify-center space-y-1">
                  <Text className="text-2xl font-semibold text-emerald-500">COMPANY</Text>
                  <Text
                    className="text-md text-gray-600"
                    style={{ flexWrap: 'wrap' }}
                    numberOfLines={0}>
                    Let&apos;s recruit your great candidate faster here
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      case 2:
        return (
          <View className="flex justify-center">
            {/* Login Card */}
            <View className="mt-40 w-full  rounded-3xl  p-8 ">
              <View className="mb-8 flex flex-row items-center">
                <Text className="text-center text-3xl font-medium text-white">
                  Sign in to continue to your account
                </Text>
              </View>

              {/* Social Login Buttons */}
              <View className="mb-6 space-y-4">
                {/* Google Button */}
                <Pressable className="group transition-all active:scale-[0.98]">
                  <View className="flex max-w-lg flex-row items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-4 py-3 group-active:border-emerald-200">
                    <View className="h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                      <Image
                        source={require('../assets/google.webp')}
                        className="h-6 w-6"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <Text className="ml-4 flex-1 font-medium text-gray-800">
                      Continue with Google
                    </Text>
                  </View>
                </Pressable>

                <Pressable
                  className="group transition-all active:scale-[0.98]"
                  onPress={() => setStep(3)}>
                  <View className="max-w-lg flex-row items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-4 py-4 group-active:border-emerald-200">
                    <View className="h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                      <Ionicons name="phone-portrait" size={22} color="#059669" />
                    </View>
                    <Text className="ml-4 flex-1 font-medium text-gray-800">
                      Continue with Phone
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  className="group transition-all active:scale-[0.98]"
                  onPress={() => setStep(4)}>
                  <View className="flex max-w-lg flex-row items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-4 py-3 group-active:border-emerald-200">
                    <View className="h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                      <Entypo name="mail-with-circle" size={24} className="text-emerald-500" />
                    </View>
                    <Text className="ml-4 flex-1 font-medium text-gray-800">
                      Continue with Email
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View className="flex-1  px-6">
            <View className="flex-1 items-center justify-center">
              <Text className=" text-center text-xl font-semibold text-white">
                Enter your mobile number
              </Text>
              <View className="mt-6 w-full max-w-md flex-row items-center rounded-lg border-2 border-white px-4 py-3 ">
                <Text className="mr-2 text-lg font-semibold text-white">+91</Text>

                <TextInput
                  keyboardType="phone-pad"
                  className="flex-1 text-lg text-white outline-none"
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text className="mt-3 px-4 text-center text-sm text-white">
                By clicking, you are agreeing to our Terms and Conditions
              </Text>
              <Pressable className="mt-6 w-full max-w-md self-center rounded-lg bg-white py-3 shadow-md active:opacity-80">
                <Text className="text-center text-lg font-semibold text-emerald-500">Continue</Text>
              </Pressable>
            </View>
          </View>
        );
      case 4:
        return (
          <View className="flex-1  px-6">
            <View className="flex-1 items-center justify-center">
              <Text className="text-center text-xl font-semibold text-white">Login with Email</Text>

              <View className="mt-6 w-full max-w-md flex-row items-center rounded-lg border-2 border-white px-4 py-3">
                <TextInput
                  keyboardType="email-address"
                  placeholder="Email address"
                  placeholderTextColor="#FFFFFF"
                  className="flex-1 text-lg text-white outline-none"
                  underlineColorAndroid="transparent"
                />
              </View>

              <View className="mt-4 w-full max-w-md flex-row items-center rounded-lg border-2 border-white px-4 py-3">
                <TextInput
                  secureTextEntry
                  placeholder="Password"
                  placeholderTextColor="#FFFFFF"
                  className="flex-1 text-lg text-white outline-none"
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text className="mt-3 px-4 text-center text-sm text-white">
                By logging in, you agree to our Terms and Conditions
              </Text>

              <Pressable className="mt-6 w-full max-w-md self-center rounded-lg bg-white py-3 shadow-md active:opacity-80">
                <Text className="text-center text-lg font-semibold text-emerald-500">Continue</Text>
              </Pressable>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const Stepper = () => (
    <View className="absolute bottom-6 flex w-full flex-row items-center justify-center gap-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          className={`h-2 w-12 rounded-full ${step === index ? 'bg-white' : 'bg-gray-400'}`}
        />
      ))}
    </View>
  );

  const Navigation = () => (
    <View className="absolute bottom-20 flex w-full flex-row justify-between px-8">
      {step > 0 && (
        <Pressable
          onPress={() => setStep(step - 1)}
          className="h-12 w-12 items-center justify-center rounded-full bg-white">
          <Ionicons name="arrow-back" size={24} color="#059669" />
        </Pressable>
      )}
      {step < totalSteps - 1 ? (
        <Pressable
          onPress={() => setStep(step + 1)}
          className="ml-auto h-12 w-12 items-center justify-center rounded-full bg-white">
          <Ionicons name="arrow-forward" size={24} color="#059669" />
        </Pressable>
      ) : (
        <Pressable
          onPress={onComplete}
          className="ml-auto h-12 w-12 items-center justify-center rounded-full bg-white">
          <Ionicons name="checkmark" size={24} color="#059669" />
        </Pressable>
      )}
    </View>
  );

  return (
    <View className="flex-1 items-center justify-center overflow-hidden bg-emerald-600 p-4">
      <View className="absolute left-1/2 right-0 -z-50 h-[80rem] w-[80rem] rotate-45 bg-emerald-500" />
      <View className="absolute left-2/3 right-0 -z-10 h-[40rem] w-[40rem] rotate-45  bg-emerald-600" />
      {renderCurrentStep()}
      <Stepper />
      <Navigation />
    </View>
  );
}
