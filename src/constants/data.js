import icons from "../assets/icons.js";
const icon1 = icons.icon1;
const icon2 = icons.icon2;

export default {
    dummyData:{
        user_icon: icon1,
        user_name: "안녕 나 응애",
        verified: true,
        user_status: "1일전",
        user_height: "165cm",
        user_weight: "53kg",
        cta: "팔로우",
        post_title: "지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?",
        post_text: `지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~  혹시 어떤 상품이 제일 괜찮았어?  후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이   제일 재밌었다던데 맞아???    올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가  아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에  있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!`,
        post_tags: [
          {
            id: "1",
            tag: "2023",
          },
          {
            id: "2",
            tag: "TODAYISMONDAY",
          },
          {
            id: "3",
            tag: "TOP",
          },
          {
            id: "3",
            tag: "POPS",
          },
          {
            id: "3",
            tag: "WOW",
          },
          {
            id: "3",
            tag: "ROW",
          },
        ],
      
        webview: "https://www.naver.com",
        post_like_count: "123",
        post_comment_count: "123",
        post_CTA_button: {
          label: "WV Alert",
          action: "webview",
        },
        post_comments: [
          {
            user: {
              name: "안녕 나 응애",
              verified: true,
              icon: icon1,
              status: "1일전",
            },
            text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
            like_count: 5,
            comment_count: 5,
      
            comments: [
              {
                user: {
                  name: "안녕 나 응애",
                  verified: false,
                  icon: icon2,
                  status: "1일전",
                },
                text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
                like_count: 123,
                comment_count: 0,
              },
              {
                user: {
                  name: "안녕 나 응애",
                  verified: false,
                  icon: icon2,
                },
                text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
                like_count: 123,
                comment_count: 123,
              },
            ],
          },
          {
            user: {
              name: "안녕 나 응애",
              verified: false,
              icon: icon2,
              status: "1일전",
            },
            text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
            like_count: 5,
            comment_count: 5,
      
            comments: [
              {
                user: {
                  name: "안녕 나 응애",
                  verified: true,
                  icon: icon1,
                  status: "1일전",
                },
                text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
                like_count: 123,
                comment_count: 123,
              },
              {
                user: {
                  name: "안녕 나 응애",
                  verified: false,
                  icon: icon1,
                },
                text: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
                like_count: 123,
                comment_count: 123,
              },
            ],
          },
        ],
      }
}