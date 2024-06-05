import { UseMutateFunction, useMutation, useQuery } from "react-query";
interface IUseMutationReq {
  data: any;
  isLoading: boolean;
  error: any;
  mutate: UseMutateFunction<any, any, any, any>;
}
interface IUseQueryReq {
  data: any;
  isLoading: boolean;
  error: any;
}
interface IUseReqeustParams {
  request: (...params: any) => Promise<any>;
  onSuccess?: (...params: any) => void;
  onError?: (...params: any) => void;
  queryKey: string;
}

export function useMutationReq({
  request,
  onSuccess,
  onError,
  queryKey,
}: IUseReqeustParams): IUseMutationReq {
  const { data, isLoading, error, mutate } = useMutation({
    mutationKey: queryKey,
    mutationFn: request,
    onSuccess,
    onError,
  });
  return { data, isLoading, error, mutate };
}
export function useQueryReq({
  request,
  onSuccess,
  onError,
  queryKey,
}: IUseReqeustParams): IUseQueryReq {
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: request,
    onSuccess,
    onError,
  });
  return { data, isLoading, error };
}
