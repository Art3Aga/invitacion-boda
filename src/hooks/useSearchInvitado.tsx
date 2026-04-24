import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { Invitado } from '../types/invitado';

export const useSearchInvitado = () => {
  const { slug } = useParams<{ slug: string }>();
  const [invitado, setInvitado] = useState<Invitado | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchInvitado = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('invitados').select('*').eq('slug', slug).single();
      if (!error && data) {
        setInvitado(data as Invitado);
      } else {
        setInvitado(null);
      }
      setLoading(false);
    };

  useEffect(() => {
    if (slug) fetchInvitado();
    else setLoading(false);
  }, [slug]);

  return { invitado, loading, refreshInvitado: fetchInvitado };
};