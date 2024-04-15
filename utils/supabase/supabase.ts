import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const uploadImage = async (file: File, filePath: string) => {
  await supabase.storage.from('public-image-bucket').upload(filePath, file);

  //storageに保存されている画像の表示
  const { data } = supabase.storage
    .from('public-image-bucket')
    .getPublicUrl(filePath);
  if (data) {
    const imageUrl = data.publicUrl;

    return imageUrl;
  }
};
