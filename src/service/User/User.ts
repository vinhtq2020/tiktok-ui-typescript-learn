export interface User {
    id: number,
    lastname?: string,
    tick?: Boolean
    full_name?: string,
    nickname?: string,
    avatar?: string,
    bio?: string,
    followings_count?: number,
    followers_count?: number,
    likes_count?: number,
    website_url?: string,
    facebook_url?: string,
    youtube_url?: string,
    twitter_url?: string,
    instagram_url?: string,
    created_at?: Date,
    update_at?: Date,
}